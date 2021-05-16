<template>
	<div>
		<div class="grid-w">
			<LazyHeaderComponent v-if="!$fetchState.pending" :menuData="menuData" />
			<div class="main-content">
				<Nuxt />
			</div>
		</div>
		<LazyFooterComponent v-if="!$fetchState.pending" :footerData="footerData" />
	</div>
</template>
<script src="./default.ts"></script>
