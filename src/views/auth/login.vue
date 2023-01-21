<script setup lang="ts">
import { reactive } from "vue";
const form = reactive<{ username: string | number; password: string }>({
    username: "yeyanghui",
    password: "",
});
</script>

<template>
    <div
        class="bg-gray-400 0 h-screen flex justify-center items-start md:items-center p-2 md:pd-0"
    >
        <div
            class="w-[720px] translate-y-32 md:translate-y-0 bg-white rounded-md md:grid grid-cols-2 shadow-md"
        >
            <div class="p-6">
                <h2 class="text-center test-gray-700 text-lg mt-3">会员登录</h2>
                <div class="mt-10">
                    <yh-input
                        v-model="form.username"
                        placeholder="请输入用户名"
                    />
                    <yh-input
                        class="mt-5"
                        v-model="form.password"
                        placeholder="请输入密码"
                    />
                </div>
                <yh-button />
                <div class="flex gap-3 justify-center mt-5">
                    <yh-link>网站首页</yh-link>
                    <yh-link>会员注册</yh-link>
                    <yh-link>找回密码</yh-link>
                    <yh-link>哈哈哈哈</yh-link>
                </div>
            </div>
            <div>
                <img
                    src="/images/login.jpg"
                    class="h-80 w-full object-cover hidden md:block"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
