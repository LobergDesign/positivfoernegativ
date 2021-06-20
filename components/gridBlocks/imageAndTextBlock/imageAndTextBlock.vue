<template>
	<div class="grid-r">
		<div class="grid-c-1-offset-1 grid-remove-offset-sm">
			<hr />
		</div>
		<div class="grid-c-10">
			<span class="label">
				{{ label }}
			</span>
		</div>

		<div class="grid-c-13-offset-3 grid-remove-offset-sm">
			<div class="grid-r">
				<div class="grid-c-sm-16 grid-c-8" v-if="bodytext">
					<div v-html="toHtmlString(bodytext.json)"></div>
				</div>
				<div class="grid-c-sm-16 grid-c-8 flex-center-center" v-if="image">
					<nuxt-img
						width="700"
						height="700"
						loading="lazy"
						sizes="lg:50vw sm:100vw"
						:src="image.url + '?w=700&fm=webp'"
						:alt="image.title"
					/>
					<span v-if="image.description">{{ image.description }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="./imageAndTextBlock.ts"></script>
