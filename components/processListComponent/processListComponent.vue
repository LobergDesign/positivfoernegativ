<template>
	<div>
		<h2 v-if="processContentTitle" class="flex-center" v-html="toHtmlString(processContentTitle.json)"></h2>
		<div class="process-list">
			<section v-for="(item, index) in processContentList" :key="index" class="process-list__item">
				<div class="grid-r">
					<div class="process-list__item-c-1" v-if="item.image">
						<picture>
							<source
								:data-srcset="item.image.url + '?w=400&fm=webp'"
								media="(max-width: 500px)"
								type="image/webp"
							/>
							<source
								:data-srcset="item.image.url + '?w=750&fm=webp'"
								media="(min-width: 1000px)"
								type="image/webp"
							/>
							<img
								src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
								:data-src="item.image.url + '?w=750'"
								:alt="item.image.title"
								class="lazyload process-list__item-img"
							/>
						</picture>
					</div>
					<div class="process-list__item-c-2 flex-vertical-center">
						<div>
							<h3 v-if="item.headline">{{ item.headline }}</h3>
							<div v-if="item.bodytext" v-html="toHtmlString(item.bodytext.json)"></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>
<style lang="scss" src="./processListComponent.scss"></style>
<script src="./processListComponent.ts"></script>
