import { CacheEnum } from "@/enum/cacheEnum";
import store from "./store";
import userApi, { ILoginData } from "@/api/userApi";
import router from "@/router";
import userStore from "@/store/userStore";

export async function login(values: ILoginData) {
	const {
		data: { token },
	} = await userApi.login(values);
	store.set(CacheEnum.TOKEN_NAME, { token });
	userStore().getUserInfo();
	const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME) || "/";
	router.push(routeName);
}

export function logout() {
	store.remove(CacheEnum.TOKEN_NAME);
	router.push("/");
	userStore().userinfo = null;
}
