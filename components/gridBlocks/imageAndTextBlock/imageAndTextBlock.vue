<template>
	<div class="grid-r">
		<div class="grid-c-1-offset-1 grid-remove-offset-sm">
			<hr data-animate-headline-line />
		</div>
		<div class="grid-c-10">
			<span class="label" data-animate-headline-line-label>
				{{ label }}
			</span>
		</div>

		<div class="grid-c-13-offset-3 grid-remove-offset-sm">
			<div class="grid-r">
				<div class="grid-c-sm-16 grid-c-8" v-if="bodytext">
					<SimpleUIComponentsBodytext :bodytext="bodytext" />
				</div>
				<div class="grid-c-sm-16 grid-c-8" v-if="image">
					<div class="full-height flex-center-center">
						<div>
							<NuxtImg
								provider="contentful"
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
		</div>
	</div>
</template>
<script src="./imageAndTextBlock.ts"></script>
