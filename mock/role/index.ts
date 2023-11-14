import config from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'

const { code } = config

const timeout = 1000

const adminList = [
  {
    // 这里是admin路由
    path: '/admin',
    component: '#',
    name: 'Admin',
    redirect: '/admin/studentlist',
    meta: {
      title: '学生列表',
      icon: 'ic:baseline-library-books'
    },
    children: [
      {
        path: 'test',
        name: 'StudentList',
        component: 'views/Admin/Info/IntroUpdate',
        meta: {
          title: '学生列表'
        }
      },
      {
        path: 'introupdate',
        name: 'ComputerSocietyIntroductionUpdate',
        component: 'views/Admin/Info/IntroUpdate',
        meta: {
          title: 'router.ComputerSocietyIntroductionUpdate'
        }
      },
      {
        path: 'organizationupdate',
        name: 'ComputerSocietyOrganizationUpdate',
        component: 'views/Admin/Info/OrganizationUpdate',
        meta: {
          title: 'router.ComputerSocietyOrganizationUpdate'
        }
      },
      {
        path: 'regulationupdate',
        name: 'ComputerSocietyRegulationUpdate',
        component: 'views/Admin/Info/RegulationUpdate',
        meta: {
          title: 'router.ComputerSocietyRegulationUpdate'
        }
      },
      {
        path: 'honorupdate',
        name: 'ComputerSocietyHonorUpdate',
        component: 'views/Admin/Info/HonorUpdate',
        meta: {
          title: 'router.ComputerSocietyHonorUpdate'
        }
      }
    ]
  },
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
