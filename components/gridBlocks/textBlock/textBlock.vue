<template>
	<div class="grid-r">
		<div class="grid-c-10-offset-2 grid-remove-offset-sm">
			<div v-if="bodytext" v-html="toHtmlString(bodytext.json)"></div>
		</div>
	</div>
</template>
<script src="./textBlock.ts"></script>
