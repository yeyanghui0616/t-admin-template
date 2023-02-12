<script setup lang="ts">
import userPinia from "@/store/userStore.js";
import util from "@/utils";
import menuService from "@/composables/menu";
import Notification from "@/components/notification.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

const userStore = userPinia();

const fullScreen = () => {
	document.documentElement.requestFullscreen();
};
</script>

<template>
	<div class="bg-white py-3 px-5 flex justify-between items-center">
		<div class="flex ml-2 items-center">
			<div @click="menuService.toggleState">
				<i
					v-if="menuService.close.value"
					class="fas fa-square-caret-left mr-2 text-gray-600 cursor-pointer"
				></i>
				<i
					v-else
					class="fas fa-square-caret-right mr-2 text-gray-600 cursor-pointer"
				></i>
			</div>
			<Breadcrumb class="hidden md:block" />
		</div>

		<div class="flex justify-center items-center relative cursor-pointer">
			<Notification class="mr-8" />

			<i @click="fullScreen" class="fas fa-border-none mr-2"></i>
			<div class="group relative">
				<div class="flex justify-center items-center">
					<img
						:src="userStore.userinfo?.avator"
						class="w-8 h-8 rounded-full object-cover"
					/>
					<span class="ml-2 text-sm text-gray-600">{{
						userStore.userinfo?.name
					}}</span>
				</div>
				<section
					class="group-hover:block z-50 absolute right-0 top-full bg-white shadow-sm px-5 whitespace-nowrap border rounded-md hidden"
				>
					<div class="flex items-center cursor-pointer border-b py-3">
						<i class="fa-regular fa-file"></i>
						<span class="text-xs text-gray-600 ml-2">文档中心</span>
					</div>
					<div class="flex items-center cursor-pointer py-3">
						<i class="fa-regular fa-user"></i>
						<span class="text-xs text-gray-600 ml-2">用户管理</span>
					</div>
					<div
						class="flex items-center cursor-pointer py-3"
						@click="util.user.logout()"
					>
						<i class="fa-solid fa-arrow-right-from-bracket"></i>
						<span class="text-xs text-gray-600 ml-2">退出登录</span>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
