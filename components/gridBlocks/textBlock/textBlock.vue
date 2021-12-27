<template>
	<div class="grid-r">
		<div class="grid-c-10-offset-2 grid-remove-offset-sm" v-if="blockData.bodytext">
			<SimpleUIComponentsBodytext :bodytext="blockData.bodytext" />
		</div>
	</div>
</template>
<script src="./textBlock.ts"></script>
