<script setup lang="ts">
import MenuComponent from "@/layouts/admin/menu.vue";
import NavBar from "@/layouts/admin/navbar.vue";
import Historylink from "@/layouts/admin/historyLink.vue";
</script>

<template>
	<div class="admin h-min-screen w-screen flex bg-gray-100">
		<!-- 侧边菜单 -->
		<MenuComponent class="hidden md:block" />
		<div class="content flex-1">
			<!-- 面包屑 -->
			<NavBar />
			<!-- 历史导航 -->
			<Historylink />
			<!-- 页面主体 -->
			<div class="m-5">
				<router-view />
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
