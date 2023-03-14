<script setup lang="ts">
import gsap from "gsap";
import { RendererElement } from "vue";

function beforeEnter(el: RendererElement) {
	gsap.set(el, { opacity: 0, duration: 0.5 });
}
function enter(el: RendererElement) {
	gsap.to(el, { opacity: 1, duration: 0.5, delay: el.dataset.index * 0.2 });
}

interface props {
	tag?: string;
}

const props = withDefaults(defineProps<props>(), {});
</script>

<template>
	<div class="animate-list">
		<transition-group
			:tag="props.tag"
			appear
			name="list"
			@before-enter="beforeEnter"
			@enter="enter"
		>
			<slot />
		</transition-group>
	</div>
</template>

<style lang="scss" scoped>
.animate-list {
	position: relative;
	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
		position: absolute;
		width: 100%;
	}
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
	}
	.list-move {
		transition: all 0.5s ease;
	}
}
</style>
