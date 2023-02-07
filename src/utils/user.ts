import { CacheEnum } from "@/enum/cacheEnum";
import store from "./store";
import userApi, { ILoginData } from "@/api/userApi";
import router from "@/router";
import userStore from "@/store/userStore";

export async function login(values: ILoginData) {
	const {
		result: { token },
	} = await userApi.login(values);
	store.set(CacheEnum.TOKEN_NAME, { token });
	router.push("/");
	// localStorage.setItem("token", token);
}

export function logout() {
	console.log(11111111);
	store.remove(CacheEnum.TOKEN_NAME);
	router.push("/");
	userStore().userinfo = null;
}
