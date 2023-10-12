import { defineStore } from 'pinia'
import { asyncRouterMap, constantRouterMap } from '@/router'
import { generateRoutesFn1, generateRoutesFn2, flatMultiLevelRoutes } from '@/utils/routerHelper'
import { store } from '../index'
import { cloneDeep } from 'lodash-es'

// 定义权限控制状态
export interface PermissionState {
  routers: AppRouteRecordRaw[] // 存储所有路由
  addRouters: AppRouteRecordRaw[] // 存储动态生成的路由
  isAddRouters: boolean // 是否已添加动态路由的标志
  menuTabRouters: AppRouteRecordRaw[] // 存储标签页菜单的路由
}

// 创建权限控制 Store
export const usePermissionStore = defineStore('permission', {
  state: (): PermissionState => ({
    routers: [],
    addRouters: [],
    isAddRouters: false,
    menuTabRouters: []
  }),
  getters: {
    // 获取所有路由
    getRouters(): AppRouteRecordRaw[] {
      return this.routers
    },
    // 获取扁平化的动态路由
    getAddRouters(): AppRouteRecordRaw[] {
      return flatMultiLevelRoutes(cloneDeep(this.addRouters))
    },
    // 获取是否已添加动态路由的标志
    getIsAddRouters(): boolean {
      return this.isAddRouters
    },
    // 获取标签页菜单的路由
    getMenuTabRouters(): AppRouteRecordRaw[] {
      return this.menuTabRouters
    }
  },
  actions: {
    // 生成路由
    generateRoutes(
      // 三种类型：管理员，测试，无权限
      type: 'admin' | 'test' | 'none',
      routers?: AppCustomRouteRecordRaw[] | string[]
    ): Promise<unknown> {
      return new Promise<void>((resolve) => {
        let routerMap: AppRouteRecordRaw[] = []

        if (type === 'admin') {
          console.log('以admin用户登陆')
          // 模拟后端过滤菜单
          console.log('使用generateRoutesFn2方法生成路由表')
          routerMap = generateRoutesFn2(routers as AppCustomRouteRecordRaw[])
        } else if (type === 'test') {
          console.log('以test用户登陆')
          // 模拟前端过滤菜单
          console.log('test使用generateRoutesFn2方法生成路由表')
          routerMap = generateRoutesFn2(routers as AppCustomRouteRecordRaw[])
        } else {
          // 直接读取静态路由表
          console.log('直接读取静态路由表')
          console.log(routerMap)
          routerMap = cloneDeep(asyncRouterMap)
        }

        // 动态路由，确保 404 路由总是位于最后
        this.addRouters = routerMap.concat([
          {
            path: '/:path(.*)*',
            redirect: '/404',
            name: '404Page',
            meta: {
              hidden: true,
              breadcrumb: false
            }
          }
        ])
        // 渲染菜单的所有路由
        this.routers = cloneDeep(constantRouterMap).concat(routerMap)
        resolve()
      })
    },
    // 设置是否已添加动态路由的标志
    setIsAddRouters(state: boolean): void {
      this.isAddRouters = state
    },
    // 设置标签页菜单的路由
    setMenuTabRouters(routers: AppRouteRecordRaw[]): void {
      this.menuTabRouters = routers
    }
  }
})

// 导出权限控制 Store
export const usePermissionStoreWithOut = () => {
  return usePermissionStore(store)
}
