import { useRouter } from "vue-router";
import userApi, { IUser } from "@/api/userApi";
import { defineStore } from "pinia";

export default defineStore("user", {
	state: () => ({
		userinfo: {} as null | IUser,
	}),
	actions: {
		async getUserInfo() {
			const res = await userApi.info();
			this.userinfo = res.result;
		},
	},
});
