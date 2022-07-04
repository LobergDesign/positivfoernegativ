import { Vue, Component } from "nuxt-property-decorator";
import { globalQuery } from "~/queries/global";
@Component
export default class Default extends Vue {
	public menuData: NLayout.IMenu = {};
	public footerData: NLayout.IFooterObject = {};
	// gsap injection instance
	private $gsap!: NGlobal.IGsap;
	private gsapEeasing: string = "power4.out";

	// main gsap handler
	private gsapOnLoadHandler() {
		const tl = this.$gsap.timeline();

		const initWrapInit = "#init-app-effect";
		const initLogo = "#init-logo";
		const initBackdrop = "#init-backdrop";
		const initBackdropSecond = "#init-backdrop-second";

		const hideElements = () => {
			this.$store.commit("application/initApplication");
			tl.to(initWrapInit, {
				visibility: "hidden",
				duration: 0,
			});
		};

		const logo = () => {
			tl.to(initLogo, {
				duration: 2.8,
				scale: 1,
				yPercent: -20,
				delay: 0.5,
				ease: this.gsapEeasing,
			}).to(initLogo, {
				duration: 0.1,
				scale: 0,
			});
		};
		const backdrop = () => {
			tl.to(initBackdrop, { yPercent: 0 }) //start sequencing
				.to(initBackdrop, {
					yPercent: -100,
					duration: 1,
					ease: this.gsapEeasing,
				})
				.to(initBackdrop, {
					yPercent: -200,
					duration: 0.5,
				});
		};
		const backdropSecond = () => {
			tl.to(initBackdropSecond, { yPercent: 0 }) //start sequencing
				.to(initBackdropSecond, {
					onComplete: hideElements,
					yPercent: -100,
					duration: 1.1,
					delay: 0.18,
					ease: this.gsapEeasing,
				})
				.to(initBackdropSecond, {
					yPercent: -100,
					duration: 0,
				});
		};

		return { logo, backdrop, backdropSecond };
	}
	// initial state
	public customBeforeAppear() {
		this.gsapOnLoadHandler().logo();
		this.gsapOnLoadHandler().backdrop();
		this.gsapOnLoadHandler().backdropSecond();
	}

	async fetch() {
		const response = await this.$nuxt.context.$dataApi.getData(globalQuery);
		const rsp = response.data as NDataFetch.IPages;
		const mainMenuCollection = rsp.globalSettings?.mainMenuCollection;
		const footerLinks = rsp.globalSettings?.footerLinksCollection?.items;
		const {
			logo,
			empowerMind,
			empowerMindBodytext,
			adresse,
			email,
			facebook,
			footerText,
			instagram,
			linkedIn,
			phonenumber,
			youTube,
			zipcodeAndCity,
			cv,
		} = rsp.globalSettings;
		this.menuData = { mainMenuCollection, logo };
		this.footerData = {
			footerObject: {
				empowerMind,
				empowerMindBodytext,
				cv,
				adresse,
				email,
				facebook,
				footerText,
				instagram,
				linkedIn,
				phonenumber,
				youTube,
				zipcodeAndCity,
				footerLinks,
			},
		};
	}
}
