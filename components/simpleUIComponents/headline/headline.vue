<template>
	<div>
		<div data-animate-headline v-if="!size && headline">
			<h1 data-animate-headline-in v-html="toHtmlString(headline.json)"></h1>
		</div>
		<div data-animate-headline v-if="size === 2 && headline">
			<h2 data-animate-headline-in>{{ headline }}</h2>
		</div>
	</div>
</template>
<script src="./headline.ts"></script>
