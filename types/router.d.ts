// typings.d.ts or router.ts
import "vue-router";
import { IMenu } from "#/menu";

declare module "vue-router" {
	interface RouteMeta {
		// 是可选的
		auth?: boolean; // 当前路由是否需要登录验证
		guest?: boolean; // 当前路由，游客是否可以访问
		permission?: stirng[]; // 可访问权限
		menu?: IMenu; // 菜单
	}
}
