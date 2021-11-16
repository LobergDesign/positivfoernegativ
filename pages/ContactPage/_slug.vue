<template>
	<main>
		<HeroSplitComponent
			:heroHeadline="data.pageHeadline"
			:heroBodytext="data.bodytext"
			:heroImage="data.image"
			:heroSubtitle="data.subtitle"
		/>
		<h2>Kontaktoplysninger</h2>
		<ul class="reset-ul">
			<li v-if="globalData.phonenumber">Tlf: {{ globalData.phonenumber }}</li>
			<li v-if="globalData.adresse">Adresse: {{ globalData.adresse }}</li>
		</ul>
		<!-- <pre>
			{{ globalData }}
		</pre
		> -->

		<div v-if="data.competenceSection" v-html="toHtmlString(data.competenceSection.json)"></div>
		<a
			laoding="lazy"
			target="_blank"
			href="https://assets.ctfassets.net/nriyvl1sdzam/7a6LILTbe2ZA9Fb9eyNNSg/822522dd1129fdbede4153d0abf7e8e3/netlify-headless-commerce-whitepaper.pdf"
			download="test pdf"
			>Download mit CV</a
		>
		<div v-if="data.pricesInformation" v-html="toHtmlString(data.pricesInformation.json)"></div>
	</main>
</template>
<script src="./_slug.ts"></script>
