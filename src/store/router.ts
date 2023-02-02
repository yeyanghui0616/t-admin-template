import { defineStore } from "pinia";

export default defineStore("router", {
	state: () => ({
		yh: "小小叶",
	}),
	getters: {
		get(state) {
			return state.yh;
		},
	},
});
