import { RouteRecordRaw } from "vue-router";
export default {
	name: "error",
	path: "/error",
	component: () => import("@/layouts/errors.vue"),
	meta: {
		title: "错误页面",
		icon: "fab fa-canadian-maple-leaf",
		show: true,
	},
	children: [
		{
			name: "error.404",
			path: "404",
			component: () => import("@/views/errors/404.vue"),
			meta: {
				title: "404",
				icon: "fab fa-canadian-maple-leaf",
				show: false,
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
				title: "404",
				icon: "fab fa-canadian-maple-leaf",
				show: true,
			},
		},
	],
} as RouteRecordRaw;
