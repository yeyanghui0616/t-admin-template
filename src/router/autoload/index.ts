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
	// 获取用户资料
	routes.forEach((route) => {
		router.addRoute(route);
	});
}

// TODO 通过权限过滤掉路由

export default autoload;
