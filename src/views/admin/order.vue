<script setup lang="ts">
import { Form, Field, defineRule, configure } from "vee-validate";
import { ref } from "vue";
import { required, min, max, confirmed, email } from "@vee-validate/rules";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
import { localize } from "@vee-validate/i18n";

configure({
    // 配置中文
    generateMessage: localize("zh_CN", zh_CN),
});

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);

const account = ref<string>("");
const emailRule = (value: any) => {
    return /@/.test(value) ? true : "邮箱格式错误";
};

const onSubmit = (value: object) => {
    console.log(value);
    alert("校验成功");
};
</script>

<template>
    <Form @submit="onSubmit">
        <Field
            name="account"
            v-model="account"
            label="账号"
            :rules="{ required: true, email: true, min: 1, max: 10 }"
            :validate-on-input="true"
            #default="{ field, errorMessage }"
        >
            <input v-bind="field" v-model="account" />
            <hr />
            <p>{{ errorMessage }}</p>
        </Field>
        <button>提交表单</button>
    </Form>
</template>

<style lang="scss" scoped>
Form {
    @apply w-screen h-screen flex justify-center items-center bg-gray-500;
    input {
        @apply border-4 p-2 rounded-md border-violet-500 outline-none;
    }
    button {
        @apply border-4 border-violet-500 text-white bg-violet-500 rounded-md p-2;
    }
}
</style>
