import { RouteRecordRaw } from 'vue-router'
export function mapMenuRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  const allRoutes: RouteRecordRaw[] = []
  const routerFiles = require.context('../router/main', true, /\.ts/)
  // console.log(routerFiles.keys())
  routerFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    // console.log(route.default)

    allRoutes.push(route.default)
  })

  const _resourceMapUrl = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _resourceMapUrl(menu.children)
      }
    }
  }
  _resourceMapUrl(userMenus)
  return routes
}
