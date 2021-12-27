<template>
	<div class="contact-form dark-section spacing-b-medium">
		<div class="grid-w">
			<div class="grid-r">
				<div class="grid-c-10-offset-3">
					<h3 v-if="!showSucces && !showError">Skriv en besked</h3>
					<template v-if="showSucces">
						<h2>Tak for din besked</h2>
						<p>Jeg gennemgår din besked og vender tilbage indenfor 2-4 hverdage.</p>
					</template>
					<template v-if="showError">
						<h2>Ups der skette en fejl</h2>
						<p>Prøv igen senere</p>
					</template>
					<div v-if="!showSucces && !showError">
						<form name="simpleContactForm" method="POST" data-netlify="true" id="simple-contact-form">
							<div class="grid-r">
								<div class="grid-c-8">
									<input type="text" placeholder="Navn" name="name" required />
								</div>
								<div class="grid-c-8">
									<input type="tel" placeholder="Telefonnummer" name="phone" />
								</div>

								<div class="grid-c-8">
									<input type="email" placeholder="Email" name="email" required />
								</div>
								<div class="grid-c-8">
									<input type="text" placeholder="Emne" name="Emne" />
								</div>
								<div class="grid-c-16">
									<textarea placeholder="Besked" name="message" required></textarea>
								</div>
								<div class="grid-c-16">
									<button class="btn" type="submit">Send besked</button>
								</div>
								<input type="hidden" name="form-name" value="simpleContactForm" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" src="./contactFormComponent.scss"></style>
<script src="./contactFormComponent.ts"></script>
