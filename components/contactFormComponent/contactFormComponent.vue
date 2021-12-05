<template>
	<div class="contact-form dark-section spacing-b-medium">
		<div class="grid-w">
			<div class="grid-r">
				<div class="grid-c-10-offset-3">
					<h3>Skriv en besked til mig</h3>
					<!-- <form name="Kontaktformular" method="POST" netlify netlify-honeypot="bot-field">
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
								<textarea placeholder="Besked" name="message"></textarea>
							</div>
							<div class="grid-c-16">
								<button class="btn" type="submit">Send besked</button>

							
							</div>
						</div>
							<input type="hidden" name="Kontaktformular" value="Kontaktformular" />
					</form> -->
					<form name="kontaktformular" method="POST" netlify>
						<input type="hidden" name="kontaktformular" value="kontaktformular" />
						<input type="text" placeholder="Navn" name="name" required />

						<button class="btn" type="submit">Send besked</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" src="./contactFormComponent.scss"></style>
<script src="./contactFormComponent.ts"></script>
