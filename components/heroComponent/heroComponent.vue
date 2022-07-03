<template>
	<section class="hero">
		<div class="grid-r">
			<div class="grid-c-12 grid-remove-offset-sm">
				<template v-if="heroHeadline">
					<SimpleUIComponentsHeadline :headline="heroHeadline" />
				</template>
				<template v-if="heroSubtitle">
					<SimpleUIComponentsHeadline :headline="heroSubtitle" :size="2" />
				</template>
				<div v-if="heroBodytext" class="hero__bodytext">
					<SimpleUIComponentsBodytext :bodytext="heroBodytext" />
				</div>
			</div>
			<div class="grid-c-16 position-realtive overflow-hidden" v-if="heroImage">
				<NuxtImg
					provider="contentful"
					data-animate-image-in-element
					:src="heroImage.url"
					:alt="heroImage.title"
					class="hero__image"
				/>
			</div>
		</div>
	</section>
</template>
<style lang="scss">
@import "./heroComponent.scss";
</style>
<script src="./heroComponent.ts"></script>
