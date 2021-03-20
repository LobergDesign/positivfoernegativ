<template>
	<section class="hero-split">
		<div class="grid-r">
			<div class="grid-c-md-8 grid-c-sm-16 flex-vertical-center">
				<div>
					<h1 v-if="heroHeadline" v-html="toHtmlString(heroHeadline.json)"></h1>
					<h2 v-if="heroSubtitle">{{ heroSubtitle }}</h2>
					<div v-if="heroBodytext" v-html="toHtmlString(heroBodytext.json)"></div>
				</div>
			</div>
			<div class="grid-c-md-8 grid-c-sm-16" v-if="heroImage">
				<picture>
					<source
						:data-srcset="heroImage.url + '?w=500&fm=webp'"
						media="(max-width: 500px)"
						type="image/webp"
					/>
					<source
						:data-srcset="heroImage.url + '?w=780&fm=webp'"
						media="(min-width: 1000px)"
						type="image/webp"
					/>
					<img
						src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
						:data-src="heroImage.url + '?w=780'"
						:alt="heroImage.title"
						class="lazyload lazyloaded"
					/>
				</picture>
			</div>
		</div>
	</section>
</template>
<style lang="scss" src="./heroSplitComponent.scss"></style>
<script src="./heroSplitComponent.ts"></script>
