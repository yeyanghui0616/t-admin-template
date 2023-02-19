<script setup lang="ts">
// import menuStore from "@/store/menuStore";
// const menu = menuStore();

import menuService from "@/composables/menu";

console.log("menuService", menuService.history.value);
</script>

<template>
	<div
		class="hidden md:block p-3 border-t border-b bg-gray-50 shadow-sm"
		v-show="menuService.history.value.length"
	>
		<div class="grid grid-flow-col gap-2 justify-start">
			<div
				v-for="(hMenu, index) of menuService.history.value"
				:key="index"
				class="border bg-white hover:bg-violet-600 hover:text-white duration-300 rounded-sm shadow-sm py-2 px-3 text-sm text-gray-600"
				:class="{
					'bg-violet-600 text-white': $route.name === hMenu.route,
				}"
			>
				<router-link :to="{ name: hMenu.route }">
					{{ hMenu.title }}
				</router-link>
				<i
					class="fas fa-xmark ml-1 cursor-pointer hover:text-yellow-400"
					@click="menuService.removeHistoryMenu(hMenu)"
				></i>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
