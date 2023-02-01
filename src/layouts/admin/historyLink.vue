<script setup lang="ts">
import { reactive } from "vue";
const links = reactive<{ title: string }[]>([
	{
		title: "编辑器",
	},
	{
		title: "订单列表",
	},
	{
		title: "用户管理",
	},
	{
		title: "编辑器",
	},
	{
		title: "订单列表",
	},
	{
		title: "用户管理",
	},
	{
		title: "编辑器",
	},
	{
		title: "订单列表",
	},
	{
		title: "用户管理",
	},
]);
</script>

<template>
	<div class="hidden md:block">
		<div class="m-5 grid grid-flow-col gap-2 justify-start">
			<a
				href=""
				v-for="(link, index) of links"
				:key="index"
				class="bg-white rounded-md py-2 px-3 text-sm text-gray-600"
			>
				{{ link.title }}
				<i class="fas fa-xmark ml-1"></i>
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
