<script setup lang="ts">
import { reactive } from "vue";
import routerPinia from "@/store/router";
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from "vue-router";

const routerStore = routerPinia();

const router = useRouter();

// interface IMenuItem {
// 	title: string;
// 	icon?: string;
// 	active?: boolean;
// }

// interface IMenu extends IMenuItem {
// 	children?: IMenuItem[];
// }

// const menus = reactive<IMenu[]>([
// 	{
// 		title: "错误页面",
// 		active: true,
// 		icon: "fab fa-accessible-icon",
// 		children: [
// 			{
// 				title: "404",
// 				active: true,
// 			},
// 			{
// 				title: "403",
// 			},
// 			{
// 				title: "500",
// 			},
// 		],
// 	},
// 	{
// 		title: "编辑器",
// 		icon: "fab fa-affiliatetheme",
// 		children: [
// 			{
// 				title: "markdown编辑器",
// 			},
// 			{
// 				title: "富文本编辑器",
// 			},
// 		],
// 	},
// ]);

const resetMenus = () => {
	routerStore.routes.forEach((route) => {
		route.meta.isClick = false;
		route.children?.forEach((cRoute) => {
			if (cRoute.meta) {
				cRoute.meta.isClick = false;
			}
		});
	});
};

const handle = (pRoute: RouteRecordNormalized, cRoute?: RouteRecordRaw) => {
	resetMenus();
	pRoute.meta.isClick = true;
	if (cRoute && cRoute.meta) {
		cRoute.meta.isClick = true;
		router.push(cRoute);
	}
};
</script>

<template>
	<div class="menu w-[200px] bg-gray-800 p-4">
		<div class="logo text-gray-300 flex items-center">
			<i class="fas fa-blog text-fuchsia-300 mr-2 text-[25px]"></i>
			<span class="text-md letter-2 tracking-widest"> 每晚8点学习 </span>
		</div>
		<!-- 菜单 -->
		<div class="left-container">
			<dl v-for="(route, index) of routerStore.routes" :key="index">
				<dt @click="handle(route)">
					<section>
						<i :class="route.meta.icon"></i>
						<span class="text-sm">{{ route.meta.title }}</span>
					</section>
					<section>
						<i
							class="fas fa-angle-down duration-500"
							:class="{ 'rotate-180': route.meta.isClick }"
						></i>
					</section>
				</dt>
				<dd
					v-show="route.meta.isClick"
					:class="{ active: childRoute.meta?.isClick }"
					v-for="(childRoute, index) in route.children"
					:key="index"
					@click="handle(route, childRoute)"
				>
					{{ childRoute.meta?.title }}
				</dd>
			</dl>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.left-container {
	dl {
		@apply text-gray-300 text-sm;
		dt {
			@apply mt-6 flex justify-between cursor-pointer items-center text-sm;
			section {
				@apply flex items-center;
				i {
					@apply mr-2 text-sm;
				}
			}
		}
		dd {
			@apply duration-300 py-3 pl-4 my-2  hover:bg-violet-500  text-white rounded-md cursor-pointer bg-gray-700;
			&.active {
				@apply bg-violet-700;
			}
		}
	}
}
</style>
