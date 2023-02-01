import { RouteRecordRaw } from "vue-router";

export default function autoloadModuleRoutes() {
	const modules = import.meta.glob("../module/**/*.ts", { eager: true });
	console.log("modules", modules);
	const routes = [] as RouteRecordRaw[];
	Object.keys(modules).forEach((key) => {
		routes.push(modules[key].default as RouteRecordRaw);
	});
	console.log("routes", routes);
	return routes;
}
