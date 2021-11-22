<template>
	<div class="app-wrap">
		<LazyHeaderComponent v-if="!$fetchState.pending" :menuData="menuData" />
		<ScrollDownComponent />
		<div class="main-content">
			<Nuxt />
		</div>
		<LazyFooterComponent v-if="!$fetchState.pending" :footerData="footerData" />
	</div>
</template>
<script src="./default.ts"></script>
