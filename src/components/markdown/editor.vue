<script setup lang="ts">
import { nextTick } from "vue";
import ToastEditor from "./toastEditor";

interface IProps {
	modelValue?: string;
	height: number;
	placeholder?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	modelValue: "",
	height: 500,
	placeholder: "please input content",
});

const emit = defineEmits(["update:modelValue"]);

nextTick(() => {
	const toastUi = new ToastEditor("#markdownEditor", `${props.modelValue}`, `${props.height}px `);
	toastUi.editor.on("change", (type: string) => {
		emit("update:modelValue", toastUi.editor[type === "markdown" ? "getMarkdown" : "getHTML"]());
	});
});
</script>

<template>
	<div id="markdownEditor"></div>
</template>

<style lang="scss" scoped>
#markdownEditor {
	@apply bg-white;
	.toastui-editor-mode-switch {
		display: none !important;
	}
	.fullscreen {
		// @apply fixed left-0 top-0 right-0 bottom-0 bg-white z-50;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		z-index: 999;
		background-color: #fff;
	}
}
</style>
