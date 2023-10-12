import { defineStore } from 'pinia'
import { store } from '../index'
import { setCssVar, humpToUnderline } from '@/utils'
import { ElMessage, ComponentSize } from 'element-plus'
import { useStorage } from '@/hooks/web/useStorage'

const { getStorage, setStorage } = useStorage()

interface AppState {
  breadcrumb: boolean
  breadcrumbIcon: boolean
  collapse: boolean
  uniqueOpened: boolean
  hamburger: boolean
  screenfull: boolean
  size: boolean
  locale: boolean
  tagsView: boolean
  tagsViewIcon: boolean
  logo: boolean
  fixedHeader: boolean
  greyMode: boolean
  dynamicRouter: boolean
  pageLoading: boolean
  layout: LayoutType
  title: string
  userInfo: string
  isDark: boolean
  currentSize: ComponentSize
  sizeMap: ComponentSize[]
  mobile: boolean
  footer: boolean
  theme: ThemeTypes
  fixedMenu: boolean
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      userInfo: 'userInfo', // 登录信息存储字段-建议每个项目换一个字段，避免与其它项目冲突
      sizeMap: ['default', 'large', 'small'],
      mobile: false, // 是否是移动端
      title: import.meta.env.VITE_APP_TITLE, // 标题
      pageLoading: false, // 路由跳转loading

      // 面包屑
      breadcrumb: true,
      // 面包屑图标
      breadcrumbIcon: true,
      // 折叠图标
      hamburger: true,

      dynamicRouter: true,
      // 全屏图标
      screenfull: true,
      // 尺寸图标
      size: true,
      // 多语言图标
      locale: true,
      // 标签页
      tagsView: true,
      // logo
      logo: true,
      // 菜单手风琴
      uniqueOpened: false,
      // 固定header
      fixedHeader: true,
      // 页脚
      footer: true,
      // 灰色模式
      greyMode: false,
      // layout布局
      layout: 'top',
      // 暗黑模式
      isDark: false,
      // 组件尺寸
      currentSize: 'default',
      // 主题相关
      theme: {
        // 主题色
        elColorPrimary: '#409eff',
        // 左侧菜单边框颜色
        leftMenuBorderColor: '#eee',
        // 左侧菜单背景颜色
        leftMenuBgColor: '#fff',
        // 左侧菜单浅色背景颜色
        leftMenuBgLightColor: '#fff',
        // 左侧菜单选中背景颜色
        leftMenuBgActiveColor: 'RGBA(64,158,255,0.1)',
        // 左侧菜单收起选中背景颜色
        leftMenuCollapseBgActiveColor: 'RGBA(64,158,255,0.1)',
        // 左侧菜单字体颜色
        leftMenuTextColor: '#333',
        // 左侧菜单选中字体颜色
        leftMenuTextActiveColor: 'var(--el-color-primary)',
        // logo字体颜色
        logoTitleTextColor: 'inherit',
        // logo边框颜色
        logoBorderColor: '#eee',
        // 头部背景颜色
        topHeaderBgColor: '#fff',
        // 头部字体颜色
        topHeaderTextColor: 'inherit',
        // 头部悬停颜色
        topHeaderHoverColor: '#f6f6f6',
        // 头部边框颜色
        topToolBorderColor: '#eee'
      }
    }
  },
  getters: {
    getBreadcrumb(): boolean {
      return this.breadcrumb
    },
    getBreadcrumbIcon(): boolean {
      return this.breadcrumbIcon
    },
    getCollapse(): boolean {
      return this.collapse
    },
    getUniqueOpened(): boolean {
      return this.uniqueOpened
    },
    getHamburger(): boolean {
      return this.hamburger
    },
    getScreenfull(): boolean {
      return this.screenfull
    },
    getSize(): boolean {
      return this.size
    },
    getLocale(): boolean {
      return this.locale
    },
    getTagsView(): boolean {
      return this.tagsView
    },
    getTagsViewIcon(): boolean {
      return this.tagsViewIcon
    },
    getLogo(): boolean {
      return this.logo
    },
    getFixedHeader(): boolean {
      return this.fixedHeader
    },
    getGreyMode(): boolean {
      return this.greyMode
    },
    getDynamicRouter(): boolean {
      return this.dynamicRouter
    },
    getFixedMenu(): boolean {
      return this.fixedMenu
    },
    getPageLoading(): boolean {
      return this.pageLoading
    },
    getLayout(): LayoutType {
      return this.layout
    },
    getTitle(): string {
      return this.title
    },
    getUserInfo(): string {
      return this.userInfo
    },
    getIsDark(): boolean {
      return this.isDark
    },
    getCurrentSize(): ComponentSize {
      return this.currentSize
    },
    getSizeMap(): ComponentSize[] {
      return this.sizeMap
    },
    getMobile(): boolean {
      return this.mobile
    },
    getTheme(): ThemeTypes {
      return this.theme
    },
    getFooter(): boolean {
      return this.footer
    }
  },
  actions: {
    setBreadcrumb(breadcrumb: boolean) {
      this.breadcrumb = breadcrumb
    },
    setBreadcrumbIcon(breadcrumbIcon: boolean) {
      this.breadcrumbIcon = breadcrumbIcon
    },
    setCollapse(collapse: boolean) {
      this.collapse = collapse
    },
    setUniqueOpened(uniqueOpened: boolean) {
      this.uniqueOpened = uniqueOpened
    },
    setHamburger(hamburger: boolean) {
      this.hamburger = hamburger
    },
    setScreenfull(screenfull: boolean) {
      this.screenfull = screenfull
    },
    setSize(size: boolean) {
      this.size = size
    },
    setLocale(locale: boolean) {
      this.locale = locale
    },
    setTagsView(tagsView: boolean) {
      this.tagsView = tagsView
    },
    setTagsViewIcon(tagsViewIcon: boolean) {
      this.tagsViewIcon = tagsViewIcon
    },
    setLogo(logo: boolean) {
      this.logo = logo
    },
    setFixedHeader(fixedHeader: boolean) {
      this.fixedHeader = fixedHeader
    },
    setGreyMode(greyMode: boolean) {
      this.greyMode = greyMode
    },
    setDynamicRouter(dynamicRouter: boolean) {
      setStorage('dynamicRouter', dynamicRouter)
      this.dynamicRouter = dynamicRouter
    },
    setFixedMenu(fixedMenu: boolean) {
      setStorage('fixedMenu', fixedMenu)
      this.fixedMenu = fixedMenu
    },
    setPageLoading(pageLoading: boolean) {
      this.pageLoading = pageLoading
    },
    setLayout(layout: LayoutType) {
      if (this.mobile && layout !== 'classic') {
        ElMessage.warning('移动端模式下不支持切换其它布局')
        return
      }
      this.layout = layout
      setStorage('layout', this.layout)
    },
    setTitle(title: string) {
      this.title = title
    },
    setIsDark(isDark: boolean) {
      this.isDark = isDark
      if (this.isDark) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }
      setStorage('isDark', this.isDark)
    },
    setCurrentSize(currentSize: ComponentSize) {
      this.currentSize = currentSize
      setStorage('currentSize', this.currentSize)
    },
    setMobile(mobile: boolean) {
      this.mobile = mobile
    },
    setTheme(theme: ThemeTypes) {
      this.theme = Object.assign(this.theme, theme)
      setStorage('theme', this.theme)
    },
    setCssVarTheme() {
      for (const key in this.theme) {
        setCssVar(`--${humpToUnderline(key)}`, this.theme[key])
      }
    },
    setFooter(footer: boolean) {
      this.footer = footer
    }
  }
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}
