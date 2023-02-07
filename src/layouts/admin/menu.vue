<script setup lang="ts">
import { IMenu } from "#/menu";
import menuPinia from "@/store/menuStore.js";
import router from "@/router";
const menuStore = menuPinia();

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
	menuStore.menus.forEach((menu) => {
		menu.isClick = false;
		menu.children?.forEach((cmenu) => {
			if (cmenu) {
				cmenu.isClick = false;
			}
		});
	});
};

const handle = (pMenu: IMenu, cMenu?: IMenu) => {
	resetMenus();
	pMenu.isClick = true;
	if (cMenu) {
		cMenu.isClick = true;
		router.push({ name: cMenu.route });
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
			<dl v-for="(menu, index) of menuStore.menus" :key="index">
				<dt @click="handle(menu)">
					<section>
						<i :class="menu.icon"></i>
						<span class="text-sm">{{ menu.title }}</span>
					</section>
					<section>
						<i
							class="fas fa-angle-down duration-500"
							:class="{ 'rotate-180': menu.isClick }"
						></i>
					</section>
				</dt>
				<dd
					v-show="menu.isClick"
					:class="{ active: cmenu.isClick }"
					v-for="(cmenu, index) in menu.children"
					:key="index"
					@click="handle(menu, cmenu)"
				>
					{{ cmenu.title }}
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
