<template>
	<div class="list-block">
		<div class="grid-r" v-if="blockData.sectionTitle">
			<div class="grid-c-10-offset-2 grid-remove-offset-sm">
				<h2>{{ blockData.sectionTitle }}</h2>
			</div>
		</div>
		<ul class="reset-ul grid-r">
			<li
				v-for="(item, index) in blockData.listItemsCollection.items"
				:key="index"
				class="grid-c-sm-16 grid-c-4 list-block__item"
			>
				<nuxt-link :to="'/coaching/' + item.slug + '/'" v-if="item.isCoachingSubpage">
					<h3 class="list-block__item-headline">{{ item.title }}</h3>
					<div v-if="item.bodytext" v-html="toHtmlString(item.bodytext.json)"></div>
				</nuxt-link>
				<nuxt-link :to="'/' + item.slug + '/'" v-else>
					<h3 class="list-block__item-headline">{{ item.title }}</h3>
					<div v-if="item.bodytext" v-html="toHtmlString(item.bodytext.json)"></div>
				</nuxt-link>
			</li>
			<li class="grid-c-xs-16 grid-c-4 list-block__item list-block__item--last">
				<nuxt-link :to="'/' + blockData.link.slug + '/'" v-if="blockData.link">
					<span class="list-block__item-headline" v-if="blockData.title">{{ blockData.title }}</span>
					<p v-if="blockData.subtitle">{{ blockData.subtitle }}</p>
					<SvgArrow />
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>
<style lang="scss" src="./coachingBlock.scss"></style>
<script src="./coachingBlock.ts"></script>
