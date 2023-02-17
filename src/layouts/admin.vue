<script setup lang="ts">
import MenuComponent from "@/layouts/admin/menu.vue";
import NavBar from "@/layouts/admin/navbar.vue";
import Historylink from "@/layouts/admin/historyLink.vue";
import menuStore from "@/store/menuStore";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

import { watch } from "vue";
import menu from "@/composables/menu";

const route = useRoute()
watch(
	route,
	() => {
		menu.addHistoryMenu(route);
	},
	{ immediate: true }
);

// menuStore().init();

// onBeforeRouteUpdate(() => {
// 	menuStore().addHistoryMenu(route);
// });

// 记录历史路由
</script>

<template>
	<div class="admin h-screen w-screen grid md:grid-cols-[auto_1fr]">
		<!-- 侧边菜单 -->
		<MenuComponent />
		<div class="content bg-gray-100 grid grid-rows-[auto_1fr]">
			<div>
				<!-- 面包屑 -->
				<NavBar />
				<!-- 历史导航 -->
				<Historylink />
			</div>
			<!-- 页面主体 -->
			<div class="md:p-5 m-3 relative overflow-y-auto overflow-x-hidden">
				<router-view #default="{ Component, route }">
					<Transition
						appear
						class="animate__animated"
						:enter-active-class="
							route.meta.enterClass ?? 'animate__fadeInRight'
						"
						:leave-active-class="
							route.meta.leaveClass ?? 'animate__fadeOutLeft'
						"
					>
						<component :is="Component" class="absolute w-full" />
					</Transition>
				</router-view>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
// 自定义路由
export default {
	route: {
		meta: {
			auth: true,
		},
	},
};
</script>

<style scoped lang="scss">
.animate__fadeInRight {
	animation-duration: 0.5s;
}
.animate__fadeOutLeft {
	animation-duration: 0.3s;
}
</style>
