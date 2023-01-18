<template>
    <ul class="bg-red-800">
        <li>首页</li>
        <li>商品</li>
        <li>评价</li>
    </ul>
    <router-view />
</template>

<script setup lang="ts">
const a:ViteEnv = {
    VITE_API_URL:1
}
</script>