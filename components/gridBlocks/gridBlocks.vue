<template>
	<div class="grid-blocks">
		<section v-for="(item, index) in gridContent.items" :key="index" class="grid-blocks__item">
			<LazyTextBlock v-if="item.__typename === 'LayoutTextArea'" :blockData="item" />
			<LazyImageAndTextBlock v-if="item.__typename === 'TextAndImageArea'" :blockData="item" />
			<LazyImageBlock v-if="item.__typename === 'LayoutImageArea'" :blockData="item" />
			<LazyCoachingBlock v-if="item.__typename === 'LayoutCoachingBlok'" :blockData="item" />
			<LazyRecommendations v-if="item.__typename === 'LayoutRecommendations'" :blockData="item" />
			<LazyVideoBlock v-if="item.__typename === 'LayoutVideo'" :blockData="item" />
		</section>
	</div>
</template>
<style lang="scss" src="./gridBlocks.scss"></style>
<script src="./gridBlocks.ts"></script>
