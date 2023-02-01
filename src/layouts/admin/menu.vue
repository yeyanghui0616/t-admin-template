<script setup lang="ts">
import { reactive } from "vue";

interface IMenuItem {
	title: string;
	icon?: string;
	active?: boolean;
}

interface IMenu extends IMenuItem {
	children?: IMenuItem[];
}

const menus = reactive<IMenu[]>([
	{
		title: "错误页面",
		active: true,
		icon: "fab fa-accessible-icon",
		children: [
			{
				title: "404",
				active: true,
			},
			{
				title: "403",
			},
			{
				title: "500",
			},
		],
	},
	{
		title: "编辑器",
		icon: "fab fa-affiliatetheme",
		children: [
			{
				title: "markdown编辑器",
			},
			{
				title: "富文本编辑器",
			},
		],
	},
]);

const resetMenus = () => {
	menus.forEach((pmenu) => {
		pmenu.active = false;
		pmenu.children?.forEach((cmenu) => (cmenu.active = false));
	});
};

const handle = (pmemu: IMenuItem, cmenu?: IMenuItem) => {
	resetMenus();
	pmemu.active = true;
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
			<dl v-for="(menu, index) of menus" :key="index">
				<dt @click="handle(menu)">
					<section>
						<i :class="menu.icon"></i>
						<span class="text-sm">{{ menu.title }}</span>
					</section>
					<section>
						<i
							class="fas fa-angle-down duration-500"
							:class="{ 'rotate-180': menu.active }"
						></i>
					</section>
				</dt>
				<dd
					v-show="menu.active"
					:class="{ active: cmenu.active }"
					v-for="(cmenu, index) in menu.children"
					:key="index"
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
