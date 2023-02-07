import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: () => import("@/views/home.vue"),
	},
	{
		path: "/login",
		name: "login",
		meta: { guest: true }, // 只让游客访问，已经登录的有token的用户就不要访问了
		component: () => import("@/views/auth/login.vue"),
	},
	{
		path: "/:any(.*)",
		name: "notFound",
		component: () => import("@/views/errors/404.vue"),
	},
];

export default routes;
