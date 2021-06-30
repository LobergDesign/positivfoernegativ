<template>
	<main>
		<HeroComponent
			:heroHeadline="data.pageHeadline"
			:heroBodytext="data.bodytext"
			:heroImage="data.image"
			:heroSubtitle="data.subtitle"
		/>
		<LazyCollaboratorsComponent v-if="data.showCollaborators" />
	</main>
</template>
<script src="./_slug.ts"></script>
