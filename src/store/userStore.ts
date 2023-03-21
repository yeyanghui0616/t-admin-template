import { CacheEnum } from "./../enum/cacheEnum";
import userApi, { IUser } from "@/api/userApi";
import store from "@/utils/store";
import { defineStore } from "pinia";

export default defineStore("user", {
	state: () => ({
		userinfo: {} as null | IUser,
	}),
	actions: {
		async getUserInfo() {
			if (store.get(CacheEnum.TOKEN_NAME)) {
				const res = await userApi.info();
				this.userinfo = res.data;
			}
		},
	},
});
