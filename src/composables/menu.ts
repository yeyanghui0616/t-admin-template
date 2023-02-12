import { RouteLocationNormalizedLoaded } from "vue-router";
import { nextTick, ref } from "vue";
import { IMenu } from "#/menu";
import router from "@/router";
import store from "@/utils/store";
import { CacheEnum } from "@/enum/cacheEnum";

class Menu {
	public menus = ref<IMenu[]>([]);
	public history = ref<IMenu[]>([]);
	public close = ref<boolean>(false);

	constructor() {
		nextTick(() => {
			this.menus.value = this.getMenuByRoute();
			this.history.value = store.get(CacheEnum.HISTORY_MENU) ?? [];
		});
	}

	removeHistoryMenu(menu: IMenu) {
		const index = this.history.value.indexOf(menu);
		this.history.value.splice(index, 1);
	}

	addHistoryMenu(route: RouteLocationNormalized) {
		if (!route.meta?.menu) return;
		const menu: IMenu = {
			...route.meta.menu,
			route: route.name as string,
		};
		const isHas = this.history.value.some(
			(menu) => menu.route === route.name
		);
		if (!isHas) this.history.value.unshift(menu);
		if (this.history.value.length > 10) {
			this.history.value.pop();
		}

		store.set(CacheEnum.HISTORY_MENU, this.history.value);
	}

	toggleParentMenu(menu: IMenu) {
		this.menus.value.forEach((m) => {
			m.isClick = false;
			if (m === menu) m.isClick = true;
		});
	}

	toggleState() {
		this.close.value = !this.close.value;
	}

	setCurrentMenu(route: RouteLocationNormalizedLoaded) {
		this.menus.value.forEach((item) => {
			item.isClick = false;
			item.children?.forEach((c) => {
				c.isClick = false;
				if (c.route === route.name) {
					item.isClick = true;
					c.isClick = true;
				}
			});
		});
	}

	// 根据路由获取菜单
	getMenuByRoute() {
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
