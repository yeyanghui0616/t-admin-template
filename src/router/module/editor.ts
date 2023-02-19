import { RouteRecordRaw } from "vue-router";
export default {
	name: "editor",
	path: "/editor",
	component: () => import("@/layouts/admin.vue"),
	meta: {
		auth: true,
		menu: {
			title: "编辑器",
			icon: "fab fa-canadian-maple-leaf",
		},
	},
	children: [
		{
			name: "editor.base",
			path: "base",
			component: () => import("@/views/editor/base.vue"),
			meta: {
				menu: {
					title: "富文本编辑器",
				},
			},
		},
		{
			name: "editor.markdown",
			path: "markdown",
			component: () => import("@/views/editor/markdown.vue"),
			meta: {
				menu: {
					title: "markdown",
				},
				permission: "editor_markdown",
			},
		},
	],
} as RouteRecordRaw;
