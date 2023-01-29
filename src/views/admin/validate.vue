<script setup lang="ts">
import { defineRule, useField, configure, useForm } from "vee-validate";
import { ref } from "vue";
import { required, min, max, confirmed, email } from "@vee-validate/rules";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
import { localize } from "@vee-validate/i18n";

defineRule("required", required);
defineRule("email", email);
configure({
    // 配置中文
    generateMessage: localize("zh_CN", zh_CN),
});
const { handleSubmit, errors } = useForm();
const { errorMessage: usernameError, value: usernameValue } = useField(
    "username",
    {
        required: true,
        email: true,
    },
    { label: "用户名" }
);

const onSubmit = handleSubmit((values) => {
    console.log(values);
});
</script>

<template>
    <form @submit="onSubmit">
        <input type="text" v-model="usernameValue" class="border-2" />

        <p>{{ usernameError }}</p>
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
}
</style>
