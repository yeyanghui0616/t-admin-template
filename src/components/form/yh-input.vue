<script setup lang="ts">
type Props = {
    modelValue: string;
};
const props = withDefaults(defineProps<Props>(), {
    modelValue: "11122",
});
</script>

<template>
    <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as any).value)"
    />
</template>

<style lang="scss" scoped>
input {
    @apply border w-full rounded-sm py-1 px-2 border-gray-200 placeholder:text-xs outline-none focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>
