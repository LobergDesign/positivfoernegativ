<template>
	<section class="hero">
		<div class="grid-r">
		<div class="grid-c-10-offset-2 grid-remove-offset-sm">
				<h1 v-if="heroHeadline" class="hero__title--large" v-html="toHtmlString(heroHeadline.json)"></h1>

				<h2 v-if="heroSubtitle" class="hero__sub-title">{{ heroSubtitle }}</h2>

				<div v-if="heroBodytext" v-html="toHtmlString(heroBodytext.json)"></div>
			</div>
			<div class="grid-c-16" v-if="heroImage">
				<picture>
					<source
						:data-srcset="heroImage.url + '?w=500&fm=webp'"
						media="(max-width: 500px)"
						type="image/webp"
					/>
					<source
						:data-srcset="heroImage.url + '?w=1600&fm=webp'"
						media="(min-width: 1000px)"
						type="image/webp"
					/>
					<img
						src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
						:data-src="heroImage.url + '?w=1600'"
						:alt="heroImage.title"
						class="lazyload lazyloaded hero__image"
					/>
				</picture>
			</div>
		</div>
	</section>
</template>
<style lang="scss" src="./heroComponent.scss"></style>
<script src="./heroComponent.ts"></script>
