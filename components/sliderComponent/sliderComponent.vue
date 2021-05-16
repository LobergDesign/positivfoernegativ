<template>
	<section>
		<div class="slider">
			<ul class="slider__pagination reset-ul">
				<li v-for="(item, index) in blockData.sliderItemsCollection.items" :key="index">
					<nuxt-link :to="'/coaching/' + item.slug + '/'" v-if="item.model === 'CoachingItem'">
						<span v-if="item.pageHeadline" v-html="toHtmlString(item.pageHeadline.json)"> </span>
						<span v-else>Læs mere </span>
						<ArrowIcon />
					</nuxt-link>
					<nuxt-link v-else :to="item.slug">
						<span v-if="item.pageHeadline" v-html="toHtmlString(item.pageHeadline.json)"></span>
						<span v-else> Læs mere</span>
						<ArrowIcon />
					</nuxt-link>
				</li>
			</ul>

			<Hooper :settings="hooperSettings" ref="hooperSlider" class="">
				<hooper-pagination slot="hooper-addons"></hooper-pagination>
				<Slide v-for="(item, index) in blockData.sliderItemsCollection.items" :key="index" :index="index">
					<picture v-if="item.previewImage">
						<source
							:data-srcset="item.previewImage.url + '?w=500&fm=webp'"
							media="(max-width: 500px)"
							type="image/webp"
						/>
						<source
							:data-srcset="item.previewImage.url + '?w=1600&fm=webp'"
							media="(min-width: 1000px)"
							type="image/webp"
						/>
						<img
							src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
							:data-src="item.previewImage.url + '?w=1600'"
							:alt="item.previewImage.title"
							class="lazyload lazyloaded slider__image"
						/>
					</picture>

					<picture v-else-if="item.image">
						<source
							:data-srcset="item.image.url + '?w=500&fm=webp'"
							media="(max-width: 500px)"
							type="image/webp"
						/>
						<source
							:data-srcset="item.image.url + '?w=1600&fm=webp'"
							media="(min-width: 1000px)"
							type="image/webp"
						/>
						<img
							src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
							:data-src="item.image.url + '?w=1600'"
							:alt="item.image.title"
							class="lazyload lazyloaded slider__image"
						/>
					</picture>

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
