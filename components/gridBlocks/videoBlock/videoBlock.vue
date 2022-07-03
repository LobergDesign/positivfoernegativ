<template>
	<div class="grid-r">
		<div class="grid-c-14-offset-2" v-if="blockData.youTubeId">
			<div class="video-block">
				<!-- <div class="video-block__backdrop" v-on:click="toggleVideoPlayer"></div>
				<button class="video-block__icon" v-on:click="toggleVideoPlayer">
					<SvgPlay />
				</button> -->
				<!-- 
				<NuxtImg provider="contentful"
					width="700"
					height="700"
					loading="lazy"
					:src="'https://img.youtube.com/vi/' + blockData.youTubeId + '/maxresdefault.jpg'"
					alt="pfn - youtube"
					class="video-block__item video-block__item-img"
				/>

				<iframe
					ref="youtube"
					loading="lazy"
					v-if="blockData.youTubeId"
					class="video-block__item video-block__item-iframe"
					width="560"
					height="315"
					:src="'https://www.youtube.com/embed/' + blockData.youTubeId"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					autoplay
				></iframe> -->

				<div
					ref="youtube"
					class="lazyframe video-block__item"
					data-vendor="youtube"
					:data-thumbnail="'https://img.youtube.com/vi/' + blockData.youTubeId + '/maxresdefault.jpg'"
					:data-src="'https://www.youtube.com/embed/' + blockData.youTubeId"
					data-ratio="16:9"
					data-initinview="true"
					data-autoplay="false"
				></div>
			</div>
		</div>
		<div class="grid-c-10-offset-2 grid-remove-offset-sm" v-if="blockData.videoCaption">
			<div class="caption" v-html="toHtmlString(blockData.videoCaption.json)"></div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import "./videoBlock.scss";
</style>
<script src="./videoBlock.ts"></script>
