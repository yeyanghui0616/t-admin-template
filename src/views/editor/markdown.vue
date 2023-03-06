<script setup lang="ts">
import Editor from "@/components/markdown/editor.vue";
import { ref } from "vue";

const content = ref("11a1bc");
</script>

<template>
	<div>
		<Editor
			v-model="content"
			:height="300"
			placeholder="please input content"
		/>
		{{ content }}
	</div>
</template>

<style lang="scss" scoped></style>
