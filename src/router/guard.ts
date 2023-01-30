import { store } from "@/utils";
import { Router, RouteLocationNormalized } from "vue-router";
import { IData } from "@/utils/store";

class Guard {
	constructor(private router: Router) {}
	public run() {
		console.log("run....", this.router);
		this.router.beforeEach((to, from) => {
			/**
			 * 当访问(admin/validate.vue)的时候，会匹配到两个路由
			 * 当访问(admin/validate.vue)的时候，会匹配到两个路由
			 * 父路由(admin.vue)和子路由(admin/validate.vue)
			 * 最终会匹配到子路由(admin/validate.vue)
			 *
			 * vue 会把这两个路由中的元信息进行合并
			 */
			const token = store.get("token");
			if (!this.isLogin(to, token)) return { name: "login" };
			if (!this.isGuest(to, token)) return { path: "/" };
		});
	}
	// 是否是游客
	private isGuest(
		route: RouteLocationNormalized,
		token: IData | null
	): boolean {
		return Boolean(!route.meta.guest || (route.meta.guest && !token));
	}

	// 是否登陆
	private isLogin(
		route: RouteLocationNormalized,
		token: IData | null
	): boolean {
		return Boolean(!route.meta.auth || (route.meta.auth && token));
	}
}

export default (router: Router) => {
	new Guard(router).run();
};