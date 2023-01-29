<script setup lang="ts">
import v from "@/plugins/validate";
// import { defineRule, useField, configure, useForm } from "vee-validate";
// import { ref } from "vue";
// import { required, min, max, confirmed, email } from "@vee-validate/rules";
// import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
// import { localize } from "@vee-validate/i18n";
// import * as yup from "yup";

// defineRule("required", required);
// defineRule("email", email);
// configure({
//     // 配置中文
//     generateMessage: localize("zh_CN", zh_CN),
// });
const { handleSubmit, errors } = v.useForm({
    initialValues: {
        username: "YEYH",
        password: "122",
    },
    validationSchema: {
        username: v.yup
            .string()
            .required("用户名不能为空")
            .email("邮箱格式错误"),
        password: {
            required: true,
        },
    },
});
const { value: usernameValue } = v.useField(
    "username",
    {},
    { label: "用户名" }
);
const { value: passwordValue } = v.useField("password", {}, { label: "密码" });

const onSubmit = handleSubmit((values) => {
    console.log(values);
});
</script>

<template>
    <form @submit="onSubmit">
        <section>
            用户名<input type="text" v-model="usernameValue" class="border-2" />
        </section>
        <section>
            密码<input type="text" v-model="passwordValue" class="border-2" />
        </section>
        <p>{{ errors.username }}</p>
        <button>提交</button>
    </form>
</template>

<style lang="scss" scoped>
form {
    @apply w-screen h-screen flex justify-center items-center bg-gray-500;
    input {
        @apply border-4 p-2 rounded-md border-violet-500 outline-none;
    }
    button {
        @apply border-4 border-violet-500 text-white bg-violet-500 rounded-md p-2;
    }
    p {
        @apply bg-red-400 border-l-fuchsia-200 p-2;
    }
}
</style>
