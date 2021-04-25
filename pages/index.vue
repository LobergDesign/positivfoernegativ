<template>
	<main>
		<HeroComponent
			:heroHeadline="data.pageHeadline"
			:heroBodytext="data.bodytext"
			:heroImage="data.image"
			:heroSubtitle="data.subtitle"
		/>
		<SliderComponent v-if="data.slider" :blockData="data.slider" />
		<GridBlocks :gridContent="data.contentAreaCollection" />
	</main>
</template>

<script src="./index.ts"></script>