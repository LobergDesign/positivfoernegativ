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
					<NuxtImg
						provider="contentful"
						data-animate-image-in-element
						sizes="sm:100vw lg:100vw"
						:src="heroImage.url"
						:alt="heroImage.title"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" src="./heroSplitComponent.scss"></style>
<script src="./heroSplitComponent.ts"></script>
