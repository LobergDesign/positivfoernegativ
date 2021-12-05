<template>
	<main>
		<HeroSplitComponent
			:heroHeadline="data.pageHeadline"
			:heroBodytext="data.bodytext"
			:heroImage="data.image"
			:heroSubtitle="data.subtitle"
		/>
		<div class="grid-w">
			<ProcessListComponent
				:processContentTitle="data.coachingProcessTitle"
				:processContentList="data.coachingProcessCollection.items"
			/>
			<GridBlocks v-if="data.contentAreaCollection.items.length > 0" :gridContent="data.contentAreaCollection" />
		</div>
		<LazyCollaboratorsComponent v-if="data.showCollaborators" />
	</main>
</template>

<script src="./_slug.ts"></script>
