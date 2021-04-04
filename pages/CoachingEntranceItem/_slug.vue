<template>
	<main>
		<HeroSplitComponent
			:heroHeadline="data.pageHeadline"
			:heroBodytext="data.bodytext"
			:heroImage="data.image"
			:heroSubtitle="data.subtitle"
		/>
		<GridBlocks v-if="data.contentAreaCollection.items.length > 0" :gridContent="data.contentAreaCollection" />
		<ProcessListComponent :processContentTitle="data.coachingProcessTitle" :processContentList="data.coachingProcessCollection.items" />
	</main>
</template>
<script src="./_slug.ts"></script>
