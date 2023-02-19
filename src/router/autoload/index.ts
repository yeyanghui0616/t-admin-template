import { RouteRecordRaw, Router } from "vue-router";
import util from "@/utils";
import getRoutes from "./view";
import autoloadModuleRoutes from "./module";
let routes = [] as RouteRecordRaw[];
if (util.env.VITE_ROUTER_AUTOLOAD) {
	// 根据页面进行自动注册
	routes = getRoutes();
} else {
	// 根据模块进行自动注册
	routes = autoloadModuleRoutes();
}

function autoload(router: Router) {
	/**
	 *  注册的代码：
			const user = userStore()
			// 把没有权限的路由过滤掉
			routes = routes.map((route) => {
				route.children = route.children.filter((child) => {
					const premission = child.meta.premission	
					return premission ? user.info?.premission.includes(premission) : true
				});
				return route
			});
			routes.forEach((route) =>router.addRoute(route))

	 *
	 */

	// 获取用户资料
	routes.forEach((route) => {
		router.addRoute(route);
	});
}

// TODO 通过权限过滤掉路由

export default autoload;
