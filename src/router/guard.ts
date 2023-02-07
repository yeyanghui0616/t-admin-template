import util from "@/utils";
import { Router, RouteLocationNormalized } from "vue-router";
import { IData } from "@/utils/store";
import userPinia from "@/store/userStore";
import { CacheEnum } from "@/enum/cacheEnum";

class Guard {
	constructor(private router: Router) {}

	public run() {
		this.router.beforeEach(this.beforeEach.bind(this));
	}

	private async beforeEach(
		to: RouteLocationNormalized,
		from: RouteLocationNormalized
	) {
		/**
		 * 当访问(admin/validate.vue)的时候，会匹配到两个路由
		 * 当访问(admin/validate.vue)的时候，会匹配到两个路由
		 * 父路由(admin.vue)和子路由(admin/validate.vue)
		 * 最终会匹配到子路由(admin/validate.vue)
		 *
		 * vue 会把这两个路由中的元信息进行合并
		 */
		if (!this.isLogin(to)) return { name: "login" };
		if (!this.isGuest(to)) return from;
		await this.getUserInfo();
	}

	private getUserInfo() {
		if (this.token()) return userPinia().getUserInfo();
	}

	private token(): IData | null {
		return util.store.get(CacheEnum.TOKEN_NAME);
	}

	// 是否是游客
	private isGuest(route: RouteLocationNormalized): boolean {
		return Boolean(
			!route.meta.guest || (route.meta.guest && !this.token())
		);
	}

	// 是否登陆
	private isLogin(route: RouteLocationNormalized): boolean {
		return Boolean(!route.meta.auth || (route.meta.auth && this.token()));
	}
}

export default (router: Router) => {
	new Guard(router).run();
};
