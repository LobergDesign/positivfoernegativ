<template>
	<section class="hero-split">
		<div class="grid-r">
			<div class="grid-c-sm-16 grid-c-8 flex-vertical-center">
				<div>
					<h1 v-if="heroHeadline" v-html="toHtmlString(heroHeadline.json)"></h1>
					<h2 v-if="heroSubtitle">{{ heroSubtitle }}</h2>
					<div v-if="heroBodytext" v-html="toHtmlString(heroBodytext.json)"></div>
				</div>
			</div>
			<div class="grid-c-sm-16 grid-c-8" v-if="heroImage">
				<nuxt-img
					width="700"
					height="700"
					loading="lazy"
					sizes="lg:50vw sm:100vw"
					:src="heroImage.url + '?w=700&fm=webp'"
					:alt="heroImage.title"
				/>
			</div>
		</div>
	</section>
</template>
<style lang="scss" src="./heroSplitComponent.scss"></style>
<script src="./heroSplitComponent.ts"></script>
