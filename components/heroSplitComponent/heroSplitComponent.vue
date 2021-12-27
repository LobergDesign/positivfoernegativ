<template>
	<section class="hero-split">
		<div class="grid-r">
			<div class="grid-c-sm-16 grid-c-8 flex-vertical-center">
				<div class="hero-split__content">
					<template v-if="heroHeadline">
						<SimpleUIComponentsHeadline :headline="heroHeadline" />
					</template>
					<template v-if="heroSubtitle">
						<SimpleUIComponentsHeadline :headline="heroSubtitle" :size="2" />
					</template>
					<div v-if="heroBodytext">
						<SimpleUIComponentsBodytext :bodytext="heroBodytext" />
					</div>
				</div>
			</div>
			<div class="grid-c-sm-16 grid-c-8" v-if="heroImage">
				<div class="hero-split__img">
					<div data-animate-backdrop-in></div>
					<nuxt-img
						data-animate-backdrop-in-element
						width="900"
						height="900"
						sizes="lg:50vw sm:100vw"
						:src="heroImage.url + '?w=900&fm=webp'"
						:alt="heroImage.title"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" src="./heroSplitComponent.scss"></style>
<script src="./heroSplitComponent.ts"></script>
