<template>
	<div>
		<h1>slider</h1>
		<ul>
			<li v-for="(item, index) in blockData.sliderItemsCollection.items" :key="index">
				{{ item.slug }}
			</li>
		</ul>
	</div>
</template>
<style lang="scss" src="./sliderComponent.scss"></style>
<script src="./sliderComponent.ts"></script>
