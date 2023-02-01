<script setup lang="ts">
import { nextTick, reactive } from "vue";

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
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById("echart1"));
	// 绘制图表
	myChart.setOption({
		title: {
			text: "ECharts 入门示例",
		},
		tooltip: {},
		xAxis: {
			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
		},
		yAxis: {},
		series: [
			{
				name: "销量",
				type: "bar",
				data: [5, 20, 36, 10, 10, 20],
			},
		],
	});
});
</script>

<template>
	<div class="grid grid-flow-col gap-3">
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
					<el-tag type="danger" size="mini" effect="dark">
						月
					</el-tag>
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

	<div>
		<section>
			<div
				id="echart1"
				class="grid justify-items-center items-center"
			></div>
		</section>
	</div>
</template>

<style lang="scss" scoped></style>
