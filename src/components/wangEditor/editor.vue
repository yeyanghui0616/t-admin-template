<script setup lang="ts">
import { nextTick } from "vue";
import wangEditor from "./wangEditor";

interface Props {
	height?: number;
	modelValue?: string;
	uploadImgServer?: string;
}

const props = withDefaults(defineProps<Props>(), {
	height: 100,
	modelValue: "",
	uploadImgServer: "/api/upload/image",
});

const emit = defineEmits(["update:modelValue"]);

nextTick(() => {
	new wangEditor(
		"#editor",
		(newValue: string) => {
			emit("update:modelValue", newValue);
		},
		props
	);
});
</script>

<template>
	<div id="editor"></div>
</template>

<style lang="scss" scoped></style>
