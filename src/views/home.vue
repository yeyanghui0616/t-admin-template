<script setup lang="ts"></script>

<template>
	<div
		class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
		<img
			src="/images/login.jpg"
			class="w-52 h-52 object-cover rounded-full border-4 bg-white mb-4"
			alt="" />
		<div>
			<router-link :to="{ name: 'admin.validate' }" class="yh-button"
				>后台管理</router-link
			>
			<router-link
				:to="{ name: 'login' }"
				class="yh-button ml-3 yh-danger"
				>用户登录</router-link
			>
		</div>
		<div class="text-gray-300 text-sm font-mono drop-shadow-md mt-4">
			点击进入后台管理系统
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
