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

console.log(env )
console.log(typeof import.meta.env.VITE_SOME_KEY)

const responce = await fetch(`http://127.0.0.1:5173/api/get`).then(res=>res.json())
console.log('responce', responce)

</script>