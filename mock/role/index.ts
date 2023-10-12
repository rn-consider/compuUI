import config from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'

const { code } = config

const timeout = 1000

const adminList = [
  {
    path: '/level',
    component: '#',
    redirect: '/level/menu1/menu1-1/menu1-1-1',
    name: 'Level',
    meta: {
      title: 'router.level',
      icon: 'carbon:skill-level-advanced'
    },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        component: '##',
        redirect: '/level/menu1/menu1-1/menu1-1-1',
        meta: {
          title: 'router.menu1'
        },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu11',
            component: '##',
            redirect: '/level/menu1/menu1-1/menu1-1-1',
            meta: {
              title: 'router.menu11',
              alwaysShow: true
            },
            children: [
              {
                path: 'menu1-1-1',
                name: 'Menu111',
                component: 'views/Level/Menu111',
                meta: {
                  title: 'router.menu111'
                }
              }
            ]
          },
          {
            path: 'menu1-2',
            name: 'Menu12',
            component: 'views/Level/Menu12',
            meta: {
              title: 'router.menu12'
            }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2Demo',
        component: 'views/Level/Menu2',
        meta: {
          title: 'router.menu2'
        }
      }
    ]
  },
  {
    path: '/example',
    component: '#',
    redirect: '/example/example-dialog',
    name: 'Example',
    meta: {
      title: 'router.example',
      icon: 'ep:management',
      alwaysShow: true
    },
    children: [
      {
        path: 'example-dialog',
        component: 'views/Example/Dialog/ExampleDialog',
        name: 'ExampleDialog',
        meta: {
          title: 'router.exampleDialog'
        }
      },
      {
        path: 'example-page',
        component: 'views/Example/Page/ExamplePage',
        name: 'ExamplePage',
        meta: {
          title: 'router.examplePage'
        }
      },
      {
        path: 'example-add',
        component: 'views/Example/Page/ExampleAdd',
        name: 'ExampleAdd',
        meta: {
          title: 'router.exampleAdd',
          noTagsView: true,
          noCache: true,
          hidden: true,
          showMainRoute: true,
          activeMenu: '/example/example-page'
        }
      },
      {
        path: 'example-edit',
        component: 'views/Example/Page/ExampleEdit',
        name: 'ExampleEdit',
        meta: {
          title: 'router.exampleEdit',
          noTagsView: true,
          noCache: true,
          hidden: true,
          showMainRoute: true,
          activeMenu: '/example/example-page'
        }
      },
      {
        path: 'example-detail',
        component: 'views/Example/Page/ExampleDetail',
        name: 'ExampleDetail',
        meta: {
          title: 'router.exampleDetail',
          noTagsView: true,
          noCache: true,
          hidden: true,
          showMainRoute: true,
          activeMenu: '/example/example-page'
        }
      }
    ]
  },
  {
    path: '/error',
    component: '#',
    redirect: '/error/404',
    name: 'Error',
    meta: {
      title: 'router.errorPage',
      icon: 'ci:error',
      alwaysShow: true
    },
    children: [
      {
        path: '404-demo',
        component: 'views/Error/404',
        name: '404Demo',
        meta: {
          title: '404'
        }
      },
      {
        path: '403-demo',
        component: 'views/Error/403',
        name: '403Demo',
        meta: {
          title: '403'
        }
      },
      {
        path: '500-demo',
        component: 'views/Error/500',
        name: '500Demo',
        meta: {
          title: '500'
        }
      }
    ]
  }
]

const testList = [
  {
    // 这里重定向到/home
    path: '/info',
    component: '#',
    name: 'Info',
    redirect: '/info/intro',
    meta: {
      title: 'router.ComputerSocietyInfo',
      icon: 'ic:baseline-library-books'
    },
    // 这里的路径为/info/
    children: [
      {
        path: 'intro',
        name: 'ComputerSocietyIntroduction',
        component: 'views/Info/Intro',
        meta: {
          title: 'router.ComputerSocietyIntroduction'
        }
      },
      {
        path: 'organization',
        name: 'ComputerSocietyOrganization',
        component: 'views/Info/Organization',
        meta: {
          title: 'router.ComputerSocietyOrganization'
        }
      },
      {
        path: 'regulation',
        name: 'ComputerSocietyRegulation',
        component: 'views/Info/Regulation',
        meta: {
          title: 'router.ComputerSocietyRegulation'
        }
      },
      {
        path: 'honor',
        name: 'ComputerSocietyHonor',
        component: 'views/Info/Honor',
        meta: {
          title: 'router.ComputerSocietyHonor'
        }
      },
      {
        path: 'history',
        name: 'ComputerSocietyHistory',
        component: 'views/Info/Histroy',
        meta: {
          title: 'router.ComputerSocietyHistory'
        }
      }
    ]
  }
]
export default [
  // 列表接口
  {
    url: '/role/list',
    method: 'get',
    timeout,
    response: ({ query }) => {
      const { roleName } = query
      return {
        data: {
          code: code,
          data: roleName === 'admin' ? adminList : testList
        }
      }
    }
  }
] as MockMethod[]
