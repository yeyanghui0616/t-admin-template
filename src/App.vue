<template>
    <ul class="bg-red-800">
        <li>首页</li>
        <li>商品</li>
        <li>评价</li>
    </ul>
    <router-view />
</template>

<script setup lang="ts">
import { env } from './types/helper';
import userApi from '@/api/userApi'
const a =  await userApi.info()
console.log('a', a)
</script>