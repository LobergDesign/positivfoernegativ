<template>
	<main>
		<HeroSplitComponent
			:heroHeadline="data.pageHeadline"
			:heroBodytext="data.bodytext"
			:heroImage="data.image"
			:heroSubtitle="data.subtitle"
		/>
		<ProcessListComponent
			:processContentTitle="data.coachingProcessTitle"
			:processContentList="data.coachingProcessCollection.items"
		/>
		<GridBlocks v-if="data.contentAreaCollection.items.length > 0" :gridContent="data.contentAreaCollection" />
	</main>
</template>

<script src="./index.ts"></script>
