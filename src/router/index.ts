import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout, getParentLayout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    // 根目录直接导向到/level
    path: '/',
    component: Layout,
    redirect: '/level',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

export const asyncRouterMap: AppRouteRecordRaw[] = [
  {
    // 这里是admin路由
    path: '/admin',
    component: Layout,
    name: 'Admin',
    redirect: '/admin/studentlist',
    meta: {
      title: t('router.ComputerSocietyInfoUpdate'),
      icon: 'ic:baseline-library-books'
    },
    children: [
      {
        path: 'studentlist',
        name: 'StudentList',
        component: () => import('@/views/Admin/Info/IntroUpdate.vue'),
        meta: {
          title: '学生列表'
        }
      },
      {
        path: 'introupdate',
        name: 'ComputerSocietyIntroductionUpdate',
        component: () => import('@/views/Admin/Info/IntroUpdate.vue'),
        meta: {
          title: t('router.ComputerSocietyIntroductionUpdate')
        }
      },
      {
        path: 'organizationupdate',
        name: 'ComputerSocietyOrganizationUpdate',
        component: () => import('@/views/Admin/Info/OrganizationUpdate.vue'),
        meta: {
          title: t('router.ComputerSocietyOrganizationUpdate')
        }
      },
      {
        path: 'regulationupdate',
        name: 'ComputerSocietyRegulationUpdate',
        component: () => import('@/views/Admin/Info/RegulationUpdate.vue'),
        meta: {
          title: t('router.ComputerSocietyRegulationUpdate')
        }
      },
      {
        path: 'honorupdate',
        name: 'ComputerSocietyHonorUpdate',
        component: () => import('@/views/Admin/Info/HonorUpdate.vue'),
        meta: {
          title: t('router.ComputerSocietyHonorUpdate')
        }
      },
      {
        path: 'historyupdate',
        name: 'ComputerSocietyHistoryUpdate',
        component: () => import('@/views/Admin/Info/HistroyUpdate.vue'),
        meta: {
          title: t('router.ComputerSocietyHistoryUpdate')
        }
      }
    ]
  },
  {
    // 这里把/level重定向到/menu1/menu1-1/menu1-1-1
    path: '/level',
    component: Layout,
    redirect: '/level/menu1/menu1-1/menu1-1-1',
    name: 'Level',
    meta: {
      title: t('router.level'),
      icon: 'carbon:skill-level-advanced'
    },
    children: [
      {
        // 这里Path为:/level/menu1
        path: 'menu1',
        name: 'Menu1',
        component: getParentLayout(),
        redirect: '/level/menu1/menu1-1/menu1-1-1',
        meta: {
          title: t('router.menu1')
        },
        children: [
          {
            // 这里路径:/level/menu1/menu1-1
            path: 'menu1-1',
            name: 'Menu11',
            component: getParentLayout(),
            redirect: '/level/menu1/menu1-1/menu1-1-1',
            meta: {
              title: t('router.menu11'),
              alwaysShow: true
            },
            children: [
              {
                // 这里路径:/level/menu1/menu1-1/menu1-1-1 导向为@/views/Level/Menu111.vue
                path: 'menu1-1-1',
                name: 'Menu111',
                component: () => import('@/views/Level/Menu111.vue'),
                meta: {
                  title: t('router.menu111')
                }
              }
            ]
          },
          {
            path: 'menu1-2',
            name: 'Menu12',
            component: () => import('@/views/Level/Menu12.vue'),
            meta: {
              title: t('router.menu12')
            }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('@/views/Level/Menu2.vue'),
        meta: {
          title: t('router.menu2')
        }
      },
      {
        path: 'menu3',
        name: 'Menu3',
        component: () => import('@/views/Info/Intro.vue'),
        meta: {
          title: t('router.menu3')
        }
      }
    ]
  },
  {
    // 这里重定向到/home
    path: '/info',
    component: Layout,
    name: 'Info',
    redirect: '/info/intro',
    meta: {
      title: t('router.ComputerSocietyInfo'),
      icon: 'ic:baseline-library-books'
    },
    // 这里的路径为/info/
    children: [
      {
        path: 'intro',
        name: 'ComputerSocietyIntroduction',
        component: () => import('@/views/Info/Intro.vue'),
        meta: {
          title: t('router.ComputerSocietyIntroduction')
        }
      },
      {
        path: 'organization',
        name: 'ComputerSocietyOrganization',
        component: () => import('@/views/Info/Organization.vue'),
        meta: {
          title: t('router.ComputerSocietyOrganization')
        }
      },
      {
        path: 'regulation',
        name: 'ComputerSocietyRegulation',
        component: () => import('@/views/Info/Regulation.vue'),
        meta: {
          title: t('router.ComputerSocietyRegulation')
        }
      },
      {
        path: 'honor',
        name: 'ComputerSocietyHonor',
        component: () => import('@/views/Info/Honor.vue'),
        meta: {
          title: t('router.ComputerSocietyHonor')
        }
      },
      {
        path: 'history',
        name: 'ComputerSocietyHistory',
        component: () => import('@/views/Info/Histroy.vue'),
        meta: {
          title: t('router.ComputerSocietyHistory')
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
