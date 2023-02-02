<script setup lang="ts">
import * as echarts from "echarts";
import { nextTick, reactive } from "vue";
import { echart1, echart2 } from "./echarts";

interface ICard {
	title: string;
	price: number;
	icon: string;
	iconColor: string;
	totalTitle: string;
	total: number;
}

const cards = reactive<ICard[]>([
	{
		title: "总人数",
		price: 12313,
		icon: "fas fa-ad",
		iconColor: "text-violet-500",
		total: 213123,
		totalTitle: "总数量",
	},
	{
		title: "销售额",
		price: 34324,
		icon: "fab fa-amazon-pay",
		iconColor: "text-green-600",
		total: 324234,
		totalTitle: "总销售额",
	},
	{
		title: "订单数",
		price: 32313,
		icon: "fab fa-angellist",
		iconColor: "text-blue-500",
		total: 7562342,
		totalTitle: "总订单数",
	},
	{
		title: "退货数",
		price: 456345,
		icon: "fab fa-asymmetrik",
		iconColor: "text-red-500",
		total: 1231343,
		totalTitle: "总退货数",
	},
]);

nextTick(() => {
	// 绘制图表
	echarts
		.init(document.getElementById("echart1") as HTMLElement)
		.setOption(echart1);
	echarts
		.init(document.getElementById("echart2") as HTMLElement)
		.setOption(echart2);
});
</script>

<template>
	<div class="grid md:grid-cols-4 gap-3 bg-gray-100">
		<el-card
			shadow="hover"
			:body-style="{ padding: '20px' }"
			v-for="(card, index) of cards"
			:key="index"
			class="cursor-pointer"
		>
			<template #header>
				<div class="flex justify-between items-center">
					<span>{{ card.title }}</span>
					<el-tag type="danger" effect="dark"> 月 </el-tag>
				</div>
			</template>

			<section class="flex mt-3 justify-between items-center">
				<span class="text-3xl">${{ card.price }}</span>
				<i :class="[card.icon, card.iconColor]" class="text-5xl"></i>
			</section>

			<section class="text-sm mt-6 flex justify-between grid-co">
				{{ card.totalTitle }}
				<span>{{ card.total }}</span>
			</section>
		</el-card>
	</div>

	<div class="p-3 mt-5 grid md:grid-cols-2 gap-3">
		<el-card shadow="always" :body-style="{ padding: '20px' }">
			<template #header>
				<div>用户统计</div>
			</template>
			<div id="echart1" class="w-full h-52"></div>
		</el-card>
		<el-card shadow="always" :body-style="{ padding: '20px' }">
			<template #header>
				<div>销售额</div>
			</template>
			<div id="echart2" class="w-full h-52"></div>
		</el-card>
	</div>
</template>

<style lang="scss" scoped></style>
