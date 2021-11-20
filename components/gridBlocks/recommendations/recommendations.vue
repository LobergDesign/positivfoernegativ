<template>
	<div class="recommentations dark-section">
		<div class="grid-r">
			<div class="grid-c-10-offset-3 grid-remove-offset-md">
				<h2 class="recommentations__title" v-if="blockData.title">
					<template v-if="blockData.recommendationsCollection.items.length > 1"
						>{{ blockData.title }}
					</template>
					<template v-else> {{ removeLastTwoStr(blockData.title) }}</template>
				</h2>
				<div v-if="blockData.recommendationsCollection">
					<ul
						v-if="blockData.recommendationsCollection.items.length < 2"
						class="recommentations__list reset-ul"
					>
						<li
							v-for="(item, index) in blockData.recommendationsCollection.items"
							:key="index"
							class="recommentations__list-item"
						>
							<div v-if="item.recommendationsBodytext">
								<span class="recommentations__quote-sign">"</span>
								<div
									class="recommentations__bodytext"
									v-html="toHtmlString(item.recommendationsBodytext.json)"
								></div>
								<span class="recommentations__quote-sign">"</span>
							</div>
							<div class="recommentations__info">
								<span class="recommentations__name" v-if="item.recommendationsName"
									>{{ item.recommendationsName }} -
								</span>
								<span class="recommentations__from" v-if="item.recommendationsFrom">{{
									item.recommendationsFrom
								}}</span>
							</div>
						</li>
					</ul>
					<div v-else class="recommentations__slider">
						<Hooper :settings="hooperSettings" ref="hooperSlider">
							<Slide
								v-for="(item, index) in blockData.recommendationsCollection.items"
								:key="index"
								:index="index"
							>
								<div v-if="item.recommendationsBodytext">
									<span class="recommentations__quote-sign">"</span>
									<div
										class="recommentations__bodytext"
										v-html="toHtmlString(item.recommendationsBodytext.json)"
									></div>
									<span class="recommentations__quote-sign">"</span>
								</div>
								<div class="recommentations__info">
									<span class="recommentations__name" v-if="item.recommendationsName"
										>{{ item.recommendationsName }} -
									</span>
									<span class="recommentations__from" v-if="item.recommendationsFrom">{{
										item.recommendationsFrom
									}}</span>
								</div>
							</Slide>
							<hooper-navigation slot="hooper-addons"></hooper-navigation>
						</Hooper>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" src="./recommendations.scss"></style>
<script src="./recommendations.ts"></script>
