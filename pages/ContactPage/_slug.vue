<template>
	<main>
		<HeroSplitComponent
			:heroHeadline="data.pageHeadline"
			:heroBodytext="data.bodytext"
			:heroImage="data.image"
			:heroSubtitle="data.subtitle"
		/>
		<div class="grid-w">
			<div class="grid-r">
				<div class="grid-c-10 spacing-b-medium">
					<h2>Kontaktoplysninger</h2>
					<ul class="reset-ul">
						<li v-if="globalData.phonenumber">Tlf: {{ globalData.phonenumber }}</li>
						<li v-if="globalData.adresse">Adresse: {{ globalData.adresse }}</li>
					</ul>
				</div>
			</div>
			<div class="grid-r">
				<div class="grid-c-10 spacing-b-medium">
					<div v-if="data.competenceSection" v-html="toHtmlString(data.competenceSection.json)"></div>
					<a
						laoding="lazy"
						target="_blank"
						href="https://assets.ctfassets.net/nriyvl1sdzam/7a6LILTbe2ZA9Fb9eyNNSg/822522dd1129fdbede4153d0abf7e8e3/netlify-headless-commerce-whitepaper.pdf"
						download="test pdf"
						>Download mit CV</a
					>
				</div>
			</div>

			<div class="grid-c-12">
				<div class="form">
					<form name="Kontaktformular" method="POST" netlify netlify-honeypot="bot-field">
						<p>
							<label>Navn: <input type="text" name="name" required /></label>
						</p>
						<p>
							<label>Telefonnummer: <input type="tel" name="phone" /></label>
						</p>
						<p>
							<label>Email: <input type="email" name="email" required /></label>
						</p>
						<p>
							<label
								>Emne:
								<select name="subject[]" multiple>
									<option value="Foredrag">Foredrag</option>
									<option value="Mentalcoaching">Mentalcoaching</option>
								</select></label
							>
						</p>
						<p>
							<label>Besked: <textarea name="message"></textarea></label>
						</p>
						<p>
							<button type="submit">Send besked</button>
						</p>
						<input type="hidden" name="Kontaktformular" value="contact" />
					</form>
				</div>
			</div>
			<div class="grid-r">
				<div class="grid-c-8 spacing-b-medium">
					<div v-if="data.pricesInformation" v-html="toHtmlString(data.pricesInformation.json)"></div>
				</div>
			</div>
		</div>
	</main>
</template>
<script src="./_slug.ts"></script>
