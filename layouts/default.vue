<template>
	<div>
		<div class="grid-w">
			<HeaderComponent :menuData="menuData" />
			<div class="main-content">
				<Nuxt />
			</div>
		</div>
		<FooterComponent :footerData="footerData" />
	</div>
</template>
<script src="./default.ts"></script>
