import { RouteRecordRaw } from "vue-router";
import { env } from "@/utils";
import getRoutes from "./view";
import autoloadModuleRoutes from "./module";
let routes = [] as RouteRecordRaw[];
if (env.VITE_ROUTER_AUTOLOAD) {
	// 根据页面进行自动注册
	routes = getRoutes();
} else {
	// 根据模块进行自动注册
	routes = autoloadModuleRoutes();
}

// TODO 通过权限过滤掉路由

export default routes;
