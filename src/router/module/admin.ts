import { RouteRecordRaw } from "vue-router";
export default {
	name: "admin",
	path: "/admin",
	component: () => import("@/layouts/admin.vue"),
	children: [
		{
			name: "admim.home",
			path: "home",
			component: () => import("@/views/admin/home.vue"),
		},
	],
} as RouteRecordRaw;
