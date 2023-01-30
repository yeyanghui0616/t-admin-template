<script setup lang="ts"></script>

<template>
	<router-view />
</template>

<style lang="scss" scoped></style>

<script lang="ts">
// 自定义路由
export default {
	route: {
		meta: {
			auth: true,
		},
	},
};
</script>
