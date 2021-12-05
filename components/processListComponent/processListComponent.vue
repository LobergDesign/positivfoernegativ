<template>
	<div>
		<div class="grid-r">
			<div class="grid-c-16 flex-center">
				<h2 v-if="processContentTitle">{{ processContentTitle }}</h2>
			</div>
		</div>
		<div class="process-list">
			<section v-for="(item, index) in processContentList" :key="index" class="process-list__item">
				<div class="grid-r">
					<div class="process-list__item-c-1" v-if="item.image">
						<nuxt-img
							width="700"
							height="700"
							loading="lazy"
							sizes="lg:50vw sm:100vw"
							:src="item.image.url + '?w=700&fm=webp'"
							:alt="item.image.title"
							class="process-list__item-img"
						/>
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
<style lang="scss" scoped>
@import "./processListComponent.scss";
</style>
<script src="./processListComponent.ts"></script>
