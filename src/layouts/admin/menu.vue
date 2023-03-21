<script setup lang="ts">
import menuService from "@/composables/menu";
import { watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
menuService.setCurrentMenu(route);

watch(route, () => menuService.setCurrentMenu(route), { immediate: true });

// 使用pinia完成的，暂时不用
// import { IMenu } from "#/menu";
// import menuPinia from "@/store/menuStore.js";
// import router from "@/router";
// const menuStore = menuPinia();

// // interface IMenuItem {
// // 	title: string;
// // 	icon?: string;
// // 	active?: boolean;
// // }

// // interface IMenu extends IMenuItem {
// // 	children?: IMenuItem[];
// // }

// // const menus = reactive<IMenu[]>([
// // 	{
// // 		title: "错误页面",
// // 		active: true,
// // 		icon: "fab fa-accessible-icon",
// // 		children: [
// // 			{
// // 				title: "404",
// // 				active: true,
// // 			},
// // 			{
// // 				title: "403",
// // 			},
// // 			{
// // 				title: "500",
// // 			},
// // 		],
// // 	},
// // 	{
// // 		title: "编辑器",
// // 		icon: "fab fa-affiliatetheme",
// // 		children: [
// // 			{
// // 				title: "markdown编辑器",
// // 			},
// // 			{
// // 				title: "富文本编辑器",
// // 			},
// // 		],
// // 	},
// // ]);

// const resetMenus = () => {
// 	menuStore.menus.forEach((menu) => {
// 		menu.isClick = false;
// 		menu.children?.forEach((cmenu) => {
// 			if (cmenu) {
// 				cmenu.isClick = false;
// 			}
// 		});
// 	});
// };

// const handle = (pMenu: IMenu, cMenu?: IMenu) => {
// 	resetMenus();
// 	pMenu.isClick = true;
// 	if (cMenu) {
// 		cMenu.isClick = true;
// 		router.push({ name: cMenu.route });
// 	}
// };
</script>

<template>
	<div
		class="admin-menu"
		:class="{ close: menuService.close.value }"
	>
		<div class="menu w-[200px] bg-gray-800">
			<div class="logo">
				<icon-home
					theme="outline"
					size="20"
					fill="#dcdcdc"
				/>
				<!-- <i class="fas fa-blog text-fuchsia-300 mr-2 text-[25px]"></i> -->
				<span class="text-md letter-2 tracking-widest"> 管理平台模版 </span>
			</div>
			<!-- 菜单 -->
			<div class="container">
				<dl
					v-for="(menu, index) of menuService.menus.value"
					:key="index"
				>
					<dt @click="menuService.toggleParentMenu(menu)">
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
					<dd :class="!menu.isClick || menuService.close.value ? 'hidden' : 'block'">
						<div
							:class="{ active: cmenu.isClick }"
							v-for="(cmenu, index) in menu.children"
							:key="index"
							@click="$router.push({ name: cmenu.route })"
						>
							{{ cmenu.title }}
						</div>
					</dd>
				</dl>
			</div>
		</div>
		<div
			class="bg block md:hidden"
			@click="menuService.toggleState"
		></div>
	</div>
</template>

<style lang="scss" scoped>
.admin-menu {
	@apply z-20;
	.menu {
		@apply h-full;
		.logo {
			@apply text-gray-300 flex items-center p-4;
		}
		.container {
			dl {
				@apply text-gray-300 text-sm relative p-4;
				dt {
					@apply flex justify-between cursor-pointer items-center text-sm;
					section {
						@apply flex items-center;
						i {
							@apply mr-2 text-sm;
						}
					}
				}
				dd {
					div {
						@apply duration-300 py-3 pl-4 my-2  hover:bg-violet-500  text-white rounded-md cursor-pointer bg-gray-700;
						&.active {
							@apply bg-violet-700;
						}
					}
				}
			}
		}
	}
}

@media screen and (min-width: 768px) {
	.admin-menu {
		&.close {
			.menu {
				width: auto;
				.logo {
					@apply justify-center;
					i {
						@apply mr-0;
					}
					span {
						@apply hidden;
					}
				}
				.container {
					dl {
						dt {
							@apply flex justify-center;
							section {
								span {
									@apply hidden;
								}
								i {
									@apply m-0;
								}
								&:nth-child(2) {
									@apply hidden;
								}
							}
						}
						&:hover {
							dd {
								display: block !important;
								@apply absolute left-full top-0 w-[200px] bg-gray-700;
							}
						}
					}
				}
			}
		}
	}
}

@media screen and (max-width: 768px) {
	.admin-menu {
		@apply h-screen w-[200px] absolute left-0 top-0;
		.menu {
			@apply h-full z-50 absolute;
		}
		.bg {
			@apply bg-gray-500 opacity-75 w-screen h-screen z-40 left-0 top-0 absolute;
		}
		&.close {
			@apply hidden;
		}
	}
}
</style>
