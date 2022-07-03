<template>
	<div class="grid-r">
		<div :class="fullscreen ? 'grid-c-16' : 'grid-c-14-offset-2'">
			<div class="grid-r position-realtive">
				<template v-if="imageItems.items.length > 1">
					<div v-for="(item, index) in imageItems.items" :key="index" class="grid-c-sm-16 grid-c-8">
						<NuxtImg
							provider="contentful"
							loading="lazy"
							width="800"
							format="webp"
							:src="item.url"
							sizes="sm:100vw xl:50vw"
							:alt="item.title"
						/>
						<span v-if="item.description">{{ item.description }}</span>
					</div>
				</template>
				<template v-else-if="imageItems.items.length === 1">
					<div class="grid-c-16">
						<NuxtImg
							provider="contentful"
							loading="lazy"
							width="1600"
							:src="imageItems.items[0].url"
							sizes="xxl:100vw"
							:alt="imageItems.items[0].title"
						/>
						<span v-if="imageItems.items[0].description">{{ imageItems.items[0].description }}</span>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>
<script src="./imageBlock.ts"></script>
