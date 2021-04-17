<template>
	<div class="grid-r">
		<div class="grid-c-14-offset-2">
			<div class="video-block"  :class="{ 'player-is-active' : isPlayerActive}">
				<div class="video-block__backdrop" v-on:click="toggleVideoPlayer"></div>
				<button class="video-block__icon" v-on:click="toggleVideoPlayer">
					<SvgPlay />
				</button>
				<img
					class="video-block__item video-block__item-img lazyload"
					src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
					:data-src="'https://img.youtube.com/vi/' + blockData.youTubeId + '/maxresdefault.jpg'"
					alt="pfn-youtube"
				/>
				<iframe ref="youtube"
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
				></iframe>
			</div>
		</div>
		<div class="grid-c-10-offset-2 grid-remove-offset-sm" v-if="blockData.videoCaption">
			<div class="caption" v-html="toHtmlString(blockData.videoCaption.json)"></div>
		</div>
	</div>
</template>
<style lang="scss" src="./videoBlock.scss"></style>
<script src="./videoBlock.ts"></script>
