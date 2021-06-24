<template>
	<main>
		<HeroComponent
			:heroHeadline="data.pageHeadline"
			:heroBodytext="data.bodytext"
			:heroImage="data.image"
			:heroSubtitle="data.subtitle"
		/>
		<LazySliderComponent v-if="data.slider" :blockData="data.slider" />
		<LazyGridBlocks :gridContent="data.contentAreaCollection" />
		<LazyCollaboratorsComponent v-if="data.showCollaborators" />
	</main>
</template>

<script src="./index.ts"></script>
