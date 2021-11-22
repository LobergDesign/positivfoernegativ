<template>
	<main>
		<div class="grid-w">
			<HeroComponent
				:heroHeadline="data.pageHeadline"
				:heroBodytext="data.bodytext"
				:heroImage="data.image"
				:heroSubtitle="data.subtitle"
			/>
		</div>
		<LazySliderComponent v-if="data.slider" :blockData="data.slider" />
		<div class="grid-w">
			<LazyGridBlocks :gridContent="data.contentAreaCollection" />
		</div>
		<LazyCollaboratorsComponent v-if="data.showCollaborators" />
	</main>
</template>

<script src="./index.ts"></script>
