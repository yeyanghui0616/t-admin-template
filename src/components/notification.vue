<script setup lang="ts">
import { nextTick, ref } from "vue";

const activeName = ref<string>("site");
const show = ref(false);

nextTick(() => {
	document.documentElement.addEventListener("click", () => {
		show.value = false;
	});
});
</script>

<template>
	<div class="notification">
		<i class="fas fa-align-justify" @click.stop="show = !show"></i>
		<el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
			<el-tab-pane label="系统通知" name="site">
				<a href=""
					>读洋那意意回元日，办杂有判着联得时下奔同德大牙，大知仆王处其后井惜大更书将屯以到只则，赐全我她反呼有有卅拢新在官夹赏梵想县交，故故促明不人笔入中不天不洪明要是，了贤乐招六的陈导都为陈方者，传回快程胸帮有到躲使判舟大的李之留重书，得说担也不吞生落自轻，入的。</a
				>
				<a href=""
					>读洋那意意回元日，办杂有判着联得时下奔同德大牙，大知仆王处其后井惜大更书将屯以到只则，赐全我她反呼有有卅拢新在官夹赏梵想县交，故故促明不人笔入中不天不洪明要是，了贤乐招六的陈导都为陈方者，传回快程胸帮有到躲使判舟大的李之留重书，得说担也不吞生落自轻，入的。</a
				>
				<a href=""
					>读洋那意意回元日，办杂有判着联得时下奔同德大牙，大知仆王处其后井惜大更书将屯以到只则，赐全我她反呼有有卅拢新在官夹赏梵想县交，故故促明不人笔入中不天不洪明要是，了贤乐招六的陈导都为陈方者，传回快程胸帮有到躲使判舟大的李之留重书，得说担也不吞生落自轻，入的。</a
				>
			</el-tab-pane>
			<el-tab-pane label="站内消息" name="message"> </el-tab-pane>
		</el-tabs>
	</div>
</template>

<style lang="scss" scoped>
.notification {
	@apply relative;

	.lists {
		@apply px-3 py-2 text-xs w-[300px] absolute bg-white p-5 border rounded-md shadow-md right-[-60px] z-10;
		a {
			@apply truncate block border-b pb-2 my-2 hover:text-violet-700;
		}
	}
}
</style>
