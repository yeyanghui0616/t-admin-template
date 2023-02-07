<script setup lang="ts">
import MenuComponent from "@/layouts/admin/menu.vue";
import NavBar from "@/layouts/admin/navbar.vue";
import Historylink from "@/layouts/admin/historyLink.vue";
import menuStore from "@/store/menuStore";

menuStore().init();
</script>

<template>
	<div class="admin min-h-screen w-screen flex bg-gray-100">
		<!-- 侧边菜单 -->
		<MenuComponent class="hidden md:block" />
		<div class="content flex-1">
			<!-- 面包屑 -->
			<NavBar />
			<!-- 历史导航 -->
			<Historylink />
			<!-- 页面主体 -->
			<div class="m-5">
				<router-view v-slot="{ Component, route }">
					<!--- TODO 目前不好使 -->
					<Transition
						appear
						enter-active-class="animate__animated animate__bounceInRight"
					>
						<div :key="route.path">
							<component :is="Component" />
						</div>
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
