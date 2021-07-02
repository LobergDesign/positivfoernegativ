<template>
	<div class="collaborators" v-if="!$fetchState.pending">
		<div class="grid-r">
			<div class="grid-c-13-offset-3 grid-remove-offset-sm">
				<h2 class="collaborators__title">Samarbejdspartnere</h2>
				<ul v-if="blockData.total < 3" class="collaborators__list reset-ul grid-r">
					<li v-for="(item, index) in blockData.items" :key="index" class="collaborators__list-item grid-c-4">
						<a :href="item.link" v-if="item.link" target="_blank">
							<nuxt-img
								class="collaborators__list-img"
								loading="lazy"
								width="250"
								:src="item.image.url"
								sizes="sm:100vw xl:50vw"
								:alt="item.image.title"
							/>
						</a>
						<div v-else>
							<nuxt-img
								class="collaborators__list-img"
								v-if="item.image"
								loading="lazy"
								width="250"
								:src="item.image.url"
								sizes="sm:100vw xl:50vw"
								:alt="item.image.title"
							/>
						</div>
					</li>
				</ul>
				<div v-else class="collaborators__slider">
					<Hooper :settings="hooperSettings" ref="hooperSlider">
						<Slide
							v-for="(item, index) in blockData.items"
							:key="index"
							:index="index"
							class="flex-vertical-center full-height"
						>
							<a :href="item.link" v-if="item.link" target="_blank">
								<nuxt-img
									class="collaborators__list-img"
									loading="lazy"
									width="250"
									:src="item.image.url"
									sizes="sm:100vw xl:50vw"
									:alt="item.image.title"
								/>
							</a>
							<div v-else>
								<nuxt-img
									class="collaborators__list-img"
									v-if="item.image"
									loading="lazy"
									width="250"
									:src="item.image.url"
									sizes="sm:100vw xl:50vw"
									:alt="item.image.title"
								/>
							</div>
						</Slide>
						<hooper-navigation slot="hooper-addons"></hooper-navigation>
					</Hooper>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" src="./collaboratorsComponent.scss"></style>
<script src="./collaboratorsComponent.ts"></script>
