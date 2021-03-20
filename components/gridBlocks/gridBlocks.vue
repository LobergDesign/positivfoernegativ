<template>
	<div class="grid-blocks">
		<section v-for="(item, index) in gridContent.items" :key="index" class="grid-blocks__item">
			<TextBlock v-if="item.__typename === 'LayoutTextArea'" :blockData="item" />
			<ImageAndTextBlock v-if="item.__typename === 'TextAndImageArea'" :blockData="item" />
			<ImageBlock v-if="item.__typename === 'LayoutImageArea'" :blockData="item" />
			<CoachingBlock v-if="item.__typename === 'LayoutCoachingBlok'" :blockData="item" />
		</section>
	</div>
</template>
<style lang="scss" src="./gridBlocks.scss"></style>
<script src="./gridBlocks.ts"></script>
