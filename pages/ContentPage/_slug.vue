<template>
	<main>
		<HeroComponent
			:heroHeadline="data.pageHeadline"
			:heroBodytext="data.bodytext"
			:heroImage="data.image"
			:heroSubtitle="data.subtitle"
		/>
		<LazyGridBlocks v-if="data.contentAreaCollection.items.length > 0" :gridContent="data.contentAreaCollection" />
		<LazyCollaboratorsComponent v-if="data.showCollaborators" />
	</main>
</template>
<script src="./_slug.ts"></script>
