<template>
	<div class="grid-r">
		<div :class="fullscreen ? 'grid-c-16' : 'grid-c-14-offset-2'">
			<div v-if="imageItems.items.length > 1" class="grid-r">
				<div v-for="(item, index) in imageItems.items" :key="index" class="grid-c-sm-8 grid-c-16">
					<picture>
						<source
							:data-srcset="item.url + '?w=500&fm=webp'"
							media="(max-width: 500px)"
							type="image/webp"
						/>
						<source
							:data-srcset="item.url + '?w=1650&fm=webp'"
							media="(min-width: 1000px)"
							type="image/webp"
						/>
						<img
							src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
							:data-src="item.url + '?w=650'"
							:alt="item.title"
							class="lazyload"
						/>
					</picture>
					<span v-if="item.description">{{ item.description }}</span>
				</div>
			</div>
			<div v-else-if="imageItems.items.length === 1">
				<picture>
					<source :data-srcset="imageItems.items[0].url + '?w=500&fm=webp'" media="(max-width: 500px)" type="image/webp" />
					<source :data-srcset="imageItems.items[0].url + '?w=1600&fm=webp'" media="(min-width: 1000px)" type="image/webp" />
					<img
						src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
						:data-src="imageItems.items[0].url + '?w=1600'"
						:alt="imageItems.items[0].title"
						class="lazyload"
					/>
				</picture>
				<span v-if="imageItems.items[0].description">{{ imageItems.items[0].description }}</span>
			</div>
		</div>
	</div>
</template>
<script src="./imageBlock.ts"></script>
