<template>
	<div class="grid-r">
		<div class="grid-c-10-offset-2 grid-remove-offset-sm">
			<h3 v-if="blockData.title">{{ blockData.title }}</h3>
			<div v-if="blockData.bodytext" v-html="toHtmlString(blockData.bodytext.json)"></div>
		</div>
	</div>
</template>
<script src="./textBlock.ts"></script>
