<script setup lang="ts">
import articleApi, { Article } from "@/api/article";

const articles = ref<Article[]>([]);
articleApi.article().then(({ result }) => {
	articles.value = result;
});
</script>

<template>
	<div class="articles">
		<AnimateList tag="ul">
			<li
				v-for="(article, index) of articles"
				:data-index="index"
				:key="article.id"
			>
				{{ article.content }}
			</li>
		</AnimateList>
	</div>
</template>

<style lang="scss" scoped>
.articles {
	width: 100vw;
	height: 100vh;
	position: relative;
	padding: 30px;
	background-color: #95a5a6;
	ul {
		li {
			padding: 0.5rem;
			margin-bottom: 20px;
			background-color: #8e44ad;
			color: white;
			border-radius: 5px;
		}
	}
}
</style>
