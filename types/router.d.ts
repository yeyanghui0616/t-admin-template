// typings.d.ts or router.ts
import "vue-router";

declare module "vue-router" {
	interface RouteMeta {
		// 是可选的
		auth?: boolean; // 当前路由是否需要登录验证
		guest?: boolean; // 当前路由，游客是否可以访问
		show?: boolean; // 当前路由，菜单栏是否显示
		title?: string; // 菜单标题
		icon?: string; // 菜单图标
	}
}
