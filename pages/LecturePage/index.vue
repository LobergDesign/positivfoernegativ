<template>
	<main>
		<HeroComponent
			:heroHeadline="data.pageHeadline"
			:heroBodytext="data.bodytext"
			:heroImage="data.image"
			:heroSubtitle="data.subtitle"
		/>
		<GridBlocks v-if="data.contentAreaCollection.items.length > 0" :gridContent="data.contentAreaCollection" />
			<LazyCollaboratorsComponent v-if="data.showCollaborators" />
	</main>
</template>

<script src="./index.ts"></script>
