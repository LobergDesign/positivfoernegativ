<template>
	<div class="contact-form dark-section spacing-b-medium">
		<div class="grid-w">
			<div class="grid-r">
				<div class="grid-c-10-offset-3">
					<h3>Skriv en besked til mig</h3>
					<!-- <form name="customcontactform" method="POST" netlify netlify-honeypot="bot-field">
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
					</form> -->
					<!-- <form name="customcontactform" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
						<input type="text" placeholder="Navn" name="name" required />

						<button class="btn" type="submit">Send besked</button>
					</form> -->

				<form name="simpleContactForm" method="POST" data-netlify="true" id="simple-contact-form" class="contact-form">
						<p class="form-row">
							<label id="contact-form-name-label" for="contact-form-name" class="form-label">Name</label>
							<input
								type="text"
								name="name"
								id="contact-form-name"
								aria-labelledby="contact-form-name-label"
								class="form-input"
							/>
						</p>
						<p class="form-row">
							<label id="contact-form-email-label" for="contact-form-email" class="form-label"
								>Email address</label
							>
							<input
								type="email"
								name="email"
								id="contact-form-email"
								aria-labelledby="contact-form-email-label"
								class="form-input"
							/>
						</p>
						<p class="form-row">
							<label id="contact-form-message-label" for="contact-form-message" class="form-label"
								>Message</label
							>
							<textarea
								name="message"
								id="contact-form-message"
								aria-labelledby="contact-form-message-label"
								class="form-textarea"
								rows="7"
							></textarea>
						</p>
						<p class="form-row form-submit">
							<button type="submit" class="button">Send Message</button>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" src="./contactFormComponent.scss"></style>
<script src="./contactFormComponent.ts"></script>
