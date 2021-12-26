<template>
	<section class="hero">
		<div class="grid-r">
			<div class="grid-c-12 grid-remove-offset-sm">
				<div data-animate-headline>
					<h1
						v-if="heroHeadline"
						class="hero__title--large"
						data-animate-in
						v-html="toHtmlString(heroHeadline.json)"
					></h1>
				</div>

				<h2 v-if="heroSubtitle" data-animate-in class="hero__sub-title">{{ heroSubtitle }}</h2>
				<div
					v-if="heroBodytext"
					data-animate-in
					class="hero__bodytext"
					v-html="toHtmlString(heroBodytext.json)"
				></div>
			</div>
			<div class="grid-c-16" v-if="heroImage">
				<nuxt-img
					data-animate-in
					format="webp"
					quality="80"
					width="200"
					height="100"
					:src="heroImage.url + '?w=1600&fm=webp'"
					:alt="heroImage.title"
					class="hero__image"
				/>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
@import "./heroComponent.scss";
</style>
<script src="./heroComponent.ts"></script>
