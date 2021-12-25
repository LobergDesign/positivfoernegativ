<template>
	<div class="app-wrap">
		<transition appear :css="false" v-on:before-appear="customBeforeAppear">
			<div class="app-init-effect">
				<div class="app-init-effect__bg" id="init-bg"></div>
				<div class="app-init-effect__logo" id="init-logo" v-if="!$fetchState.pending">
					<nuxt-img
						width="200"
						height="200"
						:src="menuData.logo.url + '?w=200&fm=webp'"
						:alt="menuData.logo.title"
						class="header__logo"
					/>
				</div>
				<div class="app-init-effect__backdrop" id="init-backdrop"></div>
				<div class="app-init-effect__backdrop-second" id="init-backdrop-second"></div>
			</div>
		</transition>
		<LazyHeaderComponent v-if="!$fetchState.pending" :menuData="menuData" />
		<ScrollDownComponent />
		<div class="main-content">
			<Nuxt />
		</div>
		<LazyFooterComponent v-if="!$fetchState.pending" :footerData="footerData" />
	</div>
</template>
<script src="./default.ts"></script>
