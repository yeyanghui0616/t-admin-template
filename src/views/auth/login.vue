<script setup lang="ts">
// import { reactive } from "vue";
// const form = reactive<{ username: string | number; password: string }>({
//     username: "",
//     password: "",
// });

import v from "@/plugins/validate";

const { Form, Field, ErrorMessage } = v;

const onSubmit = (values: any) => {
    console.log("values", values);
};

// 方式一
// const schema = v.yup.object({
//     account: v.yup.string().email().required().label("账号"),
//     password: v.yup.string().required().min(3).max(16).label("密码"),
// });

const schema = {
    account: { required: true, regex: /.+@.+|\d{11}/i },
    password: { required: true, min: 3 },
};
</script>

<template>
    <Form @submit="onSubmit" :validation-schema="schema" #default="{ errors }">
        <div
            class="w-[720px] translate-y-32 md:translate-y-0 bg-white rounded-md md:grid grid-cols-2 shadow-md"
        >
            <div class="p-6 flex flex-col justify-between">
                <div>
                    <h2 class="text-center test-gray-700 text-lg mt-3">
                        会员登录
                    </h2>
                    <div class="mt-10">
                        <Field
                            name="account"
                            as="input"
                            type="text"
                            class="yh-input"
                            label="用户名"
                            placeholder="请输入邮箱或手机号"
                        />
                        <div v-if="errors.account" class="yh-error">
                            {{ errors.account }}
                        </div>
                        <!-- <ErrorMessage name="account" as="div" class="yh-error" /> -->
                        <Field
                            name="password"
                            as="input"
                            class="yh-input mt-3"
                            label="密码"
                            type="password"
                        />
                        <div v-if="errors.password" class="yh-error">
                            {{ errors.password }}
                        </div>
                        <!-- <ErrorMessage name="password" as="div" class="yh-error" /> -->
                        <!-- <yh-input placeholder="请输入用户名" />
                    <yh-input class="mt-5" placeholder="请输入密码" /> -->
                    </div>
                    <yh-button />
                    <div class="flex justify-center mt-5">
                        <i
                            class="fab fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer"
                        ></i>
                    </div>
                </div>
                <div class="flex gap-3 justify-center mt-5">
                    <yh-link>网站首页</yh-link>
                    <yh-link>会员注册</yh-link>
                    <yh-link>找回密码</yh-link>
                    <yh-link>哈哈哈哈</yh-link>
                </div>
            </div>
            <div class="hidden md:block relative">
                <img
                    src="/images/login.jpg"
                    class="absolute h-full w-full object-cover"
                />
            </div>
        </div>
    </Form>
</template>

<style lang="scss" scoped>
form {
    @apply bg-gray-400 h-screen flex justify-center items-start md:items-center p-2 md:pb-0;
}
</style>
