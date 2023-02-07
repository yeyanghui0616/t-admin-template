import { RouteRecordRaw } from "vue-router";
export default {
	name: "error",
	path: "/error",
	component: () => import("@/layouts/admin.vue"),
	meta: {
		title: "错误页面",
		icon: "fab fa-accessible-icon",
		show: true,
		auth: true,
	},
	children: [
		{
			name: "error.404",
			path: "404",
			component: () => import("@/views/errors/404.vue"),
			meta: {
				title: "404",
				show: true,
			},
		},
		{
			name: "error.403",
			path: "403",
			component: () => import("@/views/errors/403.vue"),
		},
		{
			name: "error.500",
			path: "500",
			component: () => import("@/views/errors/500.vue"),
			meta: {
				title: "500",
				show: true,
			},
		},
	],
} as RouteRecordRaw;
