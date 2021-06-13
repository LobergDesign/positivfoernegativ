<template>
	<section class="hero">
		<div class="grid-r">
			<div class="grid-c-10-offset-2 grid-remove-offset-sm">
				<h1 v-if="heroHeadline" class="hero__title--large" v-html="toHtmlString(heroHeadline.json)"></h1>

				<h2 v-if="heroSubtitle" class="hero__sub-title">{{ heroSubtitle }}</h2>

				<div v-if="heroBodytext" v-html="toHtmlString(heroBodytext.json)"></div>
			</div>
			<div class="grid-c-16" v-if="heroImage">
				<nuxt-img
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
<style lang="scss" src="./heroComponent.scss"></style>
<script src="./heroComponent.ts"></script>
