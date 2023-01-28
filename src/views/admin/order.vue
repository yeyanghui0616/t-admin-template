<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
const account = ref("");
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
            :rules="emailRule"
            :validate-on-input="true"
        ></Field>
        <ErrorMessage name="account"></ErrorMessage>

        <button
            class="border-4 border-violet-500 text-white bg-violet-500 rounded-md p-2"
        >
            提交表单
        </button>
    </Form>
</template>

<style lang="scss" scoped>
Form {
    @apply w-screen h-screen flex justify-center items-center bg-gray-500;
    input {
        @apply border-4 p-2 rounded-md border-violet-500 outline-none;
    }
}
</style>
