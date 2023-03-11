<script setup lang="ts">
import Editor from "@/components/wangEditor/editor.vue";
import { ref } from "vue";

const content = ref("111");
</script>

<template>
	<div>
		<Editor
			:height="300"
			v-model="content"
		/>
		<div class="bg-gray-100 mt-3 border p-3">
			{{ content }}
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
