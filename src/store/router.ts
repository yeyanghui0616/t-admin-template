import { useRouter } from "vue-router";
import { defineStore } from "pinia";

export default defineStore("router", {
	state: () => ({
		routes: getRoutes(),
	}),
});

function getRoutes() {
	const router = useRouter();
	const routes = router
		.getRoutes()
		.filter((route) => route.children.length && route.meta.show)
		.map((route) => {
			route.children = route.children.filter((r) => r.meta?.show);
			return route;
		})
		.filter((route) => route.children.length);
	return routes;
}
