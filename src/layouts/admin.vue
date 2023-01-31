<script setup lang="ts">
import MenuComponent from "@/layouts/admin/menu.vue";
</script>

<template>
	<div class="admin h-screen w-screen flex">
		<!-- 侧边菜单 -->
		<MenuComponent />
		<div class="content flex-1 bg-gray-200">
			<router-view />
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
