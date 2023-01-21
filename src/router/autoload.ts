import { RouteRecordRaw } from 'vue-router';
const layouts = import.meta.glob("../layouts/*.vue",{eager:true})

const views = import.meta.glob("../views/**/*.vue",{eager:true})

function getRoutes() {
    const layoutRoutes = [] as RouteRecordRaw[]
    Object.entries(layouts).forEach(([file,module])=>{
        const route = getRouteByModule(file,module as { (): Promise<unknown>; (): Promise<unknown>; default?: any; })
        route.children = getChildrenRoutes(route)
        layoutRoutes.push(route)
    })
    return layoutRoutes
}

// 获取布局路由的子路由
function getChildrenRoutes(layoutRoute:RouteRecordRaw):RouteRecordRaw[]{
    console.log('layoutRoute', layoutRoute)
    const routes = [] as RouteRecordRaw[]
    Object.entries(views).forEach(([file,module])=>{
        // 只取和布局路由相同的，其他都去掉
        if(file.includes(`../views/${layoutRoute.name as unknown as string}`)){
            console.log('file', file)
            const route = getRouteByModule(file,module as { (): Promise<unknown>; (): Promise<unknown>; default?: any; })
            routes.push(route)
        }
    })
    return routes
}


function getRouteByModule(file:string,module: { (): Promise<unknown>; (): Promise<unknown>; default?: any; }){
    // 根据文件名，得到 /admin 
    // 方法一
    // console.log('file', file.split('/').pop()?.split('.')[0])
    // 方法二
    // console.log('first', file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i)?.groups?.name)
    // 方法三
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi,'')
    console.log('module.default', module.default)
    const route = {
        path: `/${name}`,
        name:name.replace('/','.'),
        component: module.default
    } as RouteRecordRaw

    return Object.assign(route,module.default.route)
}


export default getRoutes()