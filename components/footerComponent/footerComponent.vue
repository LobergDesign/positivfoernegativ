<template>
	<div>
		<section class="promotion-banner">
			<div class="grid-w">
				<div class="grid-r">
					<div class="grid-c-10-offset-2 grid-remove-offset-sm" v-if="data.empowerMind">
						<div v-if="data.empowerMind.url">
							<picture>
								<source
									:data-srcset="data.empowerMind.url + '?w=175&fm=webp'"
									media="(max-width: 500px)"
									type="image/webp"
								/>
								<source
									:data-srcset="data.empowerMind.url + '?w=175&fm=webp'"
									media="(min-width: 1000px)"
									type="image/webp"
								/>
								<img
									:src="data.empowerMind.url + '?w=175'"
									:alt="data.empowerMind.title"
									class="lazyload"
								/>
							</picture>
						</div>
						<span class="promotion-banner__text" v-if="data.empowerMindText">
							{{ data.empowerMindText }}
						</span>
					</div>
				</div>
			</div>
		</section>
		<footer class="footer">
			<div class="grid-w">
				<div class="grid-r">
					<div class="grid-c-11">
						<address>
							<span class="footer__header">Kontakt</span>
							<span v-if="data.phonenumber"
								>Tlf: <a :href="'tel:' + data.phonenumber">{{ data.phonenumber }}</a></span
							>
							<span v-if="data.email"
								>Mail: <a :href="'mailto:' + data.email">{{ data.email }}</a></span
							>
							<span class="footer__header">Adresse</span>
							<span v-if="data.adresse">{{ data.adresse }}</span>
							<span v-if="data.zipcodeAndCity">{{ data.zipcodeAndCity }}</span>
						</address>
					</div>
					<div class="grid-c-5">
						<div class="on-top footer__right-section">
							<div v-if="data.footerText" v-html="toHtmlString(data.footerText.json)"></div>
							<ul class="ul-reset footer__social">
								<li v-if="data.facebook">
									<a :href="data.facebook" target="_blank">
										<SvgFacebook />
									</a>
								</li>
								<li v-if="data.linkedIn">
									<a :href="data.linkedIn" target="_blank">
										<SvgLinkedIn />
									</a>
								</li>
								<li v-if="data.youTube" class="flex-bottom">
									<a :href="data.youTube" class="flex-bottom" target="_blank">
										<SvgYoutube />
									</a>
								</li>
								<li v-if="data.instagram">
									<a :href="data.instagram" target="_blank">
										<SvgInstagram />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>
<style lang="scss" src="./footerComponent.scss"></style>
<script src="./footerComponent.ts"></script>
