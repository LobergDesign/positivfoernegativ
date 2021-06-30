<template>
	<section>
		<div class="slider">
			<ul class="slider__pagination reset-ul">
				<li v-for="(item, index) in blockData.sliderItemsCollection.items" :key="index">
					<nuxt-link :to="'/coaching/' + item.slug + '/'" v-if="item.isCoachingSubpage">
						<span v-if="item.pageHeadline" v-html="toHtmlString(item.pageHeadline.json)"> </span>
						<span v-else>Læs mere </span>
						<ArrowIcon />
					</nuxt-link>
					<nuxt-link v-else :to="item.slug">
						<span v-if="item.pageHeadline" v-html="toHtmlString(item.pageHeadline.json)"></span>
						<span v-else>Læs mere</span>
						<ArrowIcon />
					</nuxt-link>
				</li>
			</ul>
			<Hooper :settings="hooperSettings" ref="hooperSlider" class="">
				<hooper-pagination slot="hooper-addons"></hooper-pagination>
				<Slide v-for="(item, index) in blockData.sliderItemsCollection.items" :key="index" :index="index">
					<nuxt-img
						v-if="item.previewImage"
						:src="item.previewImage.url"
						:alt="item.previewImage.title"
						class="slider__image"
					/>
					<nuxt-img
						v-else-if="item.image"
						:src="item.image.url"
						:alt="item.image.title"
						class="slider__image"
					/>
					<div class="slider__teaser" v-if="item.previewTeaser || item.bodytext">
						<p v-if="item.previewTeaser">
							{{ item.previewTeaser }}
						</p>
						<div v-else-if="item.bodytext" v-html="toHtmlStringWidthLimit(item.bodytext.json)"></div>
					</div>
				</Slide>
			</Hooper>
		</div>
	</section>
</template>
<style lang="scss" src="./sliderComponent.scss"></style>
<script src="./sliderComponent.ts"></script>
