import router from './router'
import { useAppStoreWithOut } from '@/store/modules/app'
import { useStorage } from '@/hooks/web/useStorage'
import type { RouteRecordRaw } from 'vue-router'
import { useTitle } from '@/hooks/web/useTitle'
import { useNProgress } from '@/hooks/web/useNProgress'
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { usePageLoading } from '@/hooks/web/usePageLoading'

const permissionStore = usePermissionStoreWithOut()

const appStore = useAppStoreWithOut()

const { getStorage } = useStorage()

const { start, done } = useNProgress()

const { loadStart, loadDone } = usePageLoading()

const whiteList = ['/login', '/mytest'] // 不重定向白名单

router.beforeEach(async (to, from, next) => {
  console.log('看这里' + permissionStore.getIsAddRouters)
  start()
  loadStart()
  // 如果已经存在用户信息
  if (getStorage(appStore.getUserInfo)) {
    // 访问/login
    if (to.path === '/login') {
      // 重定向至/
      next({ path: '/' })
      // 如果不是访问/login页面
    } else {
      // 如果已经添加了动态表，那么放行，返回
      if (permissionStore.getIsAddRouters) {
        next()
        return
      }

      // 开发者可根据实际情况进行修改，定义相应的路由角色

      // roleRouters这个从本地获取roleRouters，或者质控列表
      const roleRouters = getStorage('roleRouters') || []
      // 获取本地的UserInfo用户信息
      const userInfo = getStorage(appStore.getUserInfo)

      // 是否使用动态路由
      if (appStore.getDynamicRouter) {
        // 使用动态路由的情况下，如果角色是admin,那么生成 'admin' 类型的动态路由，不是 'admin'，则生成 'test' 类型的动态路由
        userInfo.role === 'admin'
          ? await permissionStore.generateRoutes('admin', roleRouters as AppCustomRouteRecordRaw[])
          : await permissionStore.generateRoutes('test', roleRouters as string[])
      } else {
        // 不使用动态路由，则生成静态路由
        await permissionStore.generateRoutes('none')
      }

      permissionStore.getAddRouters.forEach((route) => {
        router.addRoute(route as unknown as RouteRecordRaw) // 动态添加可访问路由表
      })
      const redirectPath = from.query.redirect || to.path
      const redirect = decodeURIComponent(redirectPath as string)
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect }
      permissionStore.setIsAddRouters(true)
      next(nextData)
    }
  } else {
    console.log('用户为登陆')
    // 若不存在用户信息，如果白名单允许放行
    if (whiteList.indexOf(to.path) !== -1) {
      console.log(`白名单存在to.path${to.path}放行`)
      next()
    } else {
      // 不然重定向到login?redirect
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})

router.afterEach((to) => {
  useTitle(to?.meta?.title as string)
  done() // 结束Progress
  loadDone()
})
