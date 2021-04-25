<template>
	<div>
		<div class="grid-w">
			<HeaderComponent v-if="!$fetchState.pending" :menuData="menuData" />
			<div class="main-content">
				<Nuxt />
			</div>
		</div>
		<FooterComponent v-if="!$fetchState.pending" :footerData="footerData" />
	</div>
</template>
<script src="./default.ts"></script>
