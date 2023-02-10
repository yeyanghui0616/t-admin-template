import { nextTick, ref } from "vue";
import { IMenu } from "#/menu";
import router from "@/router";
import store from "@/utils/store";
import { CacheEnum } from "@/enum/cacheEnum";

class Menu {
	public menus = ref<IMenu[]>([]);
	public history = ref<IMenu[]>([]);
	constructor() {
		nextTick(() => {
			this.menus.value = this.getMenuByRoute();
			this.history.value = store.get(CacheEnum.HISTORY_MENU) ?? [];
		});
	}

	// 根据路由获取菜单
	getMenuByRoute() {
		console.log("router", router);
		return router
			.getRoutes()
			.filter((route) => route.children.length && route.meta.menu)
			.map((route) => {
				let menu: IMenu = { ...route.meta?.menu };
				menu.children = route.children
					.filter((r) => r.meta?.menu)
					.map((route) => {
						return { ...route.meta?.menu, route: route.name };
					}) as IMenu[];
				return menu;
			})
			.filter((menu) => menu.children?.length);
	}
}

export default new Menu();
