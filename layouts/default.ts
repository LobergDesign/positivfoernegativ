import { Vue, Component } from "nuxt-property-decorator";
import { globalQuery } from "~/queries/global";
@Component
export default class Default extends Vue {
	public menuData: NLayout.IMenu = {};
	public footerData: NLayout.IFooterObject = {};
	// gsap injection instance
	private $gsap!: NGlobal.IGsap;
	private gsapEeasing: string = "power2.inOut";

	// main gsap handler
	private gsapOnLoadHandler() {

		const tl = this.$gsap.timeline();
		const gsap = this.$gsap;

		const initBg = "#init-bg";
		const initLogo = "#init-logo";
		const initBackdrop = "#init-backdrop";
		const initBackdropSecond = "#init-backdrop-second";

		const hideElements = () => {
			tl.to('.app-init-effect', {
				visibility: "hidden"
			});
			document.body.classList.add("is-ready");
		};

		const logo = () => {

			gsap.fromTo(
				initLogo,
				{ yPercent: -50 },
				{
					yPercent: -100,
					duration: .6,

					ease: this.gsapEeasing,
					// onComplete: hideElements,
				}
			);

		};
		const backdrop = () => {

			gsap.fromTo(
				initBackdrop,
				{ yPercent: 50 },
				{
					yPercent: -100,
					duration: 1.7,
					ease: "power4.out",

				}
			);
		};
		const backdropSecond = () => {

			gsap.fromTo(
				initBackdropSecond,
				{ yPercent: 0 },
				{
					yPercent: -100,
					duration: 1.6,
					delay: 0.55,
					ease: "power4.out",
					onComplete: hideElements,
				}
			);
		};

		// const lines = () => {
		// 	const target = ".lines-effect";
		// 	gsap.fromTo(
		// 		target,
		// 		{ xPercent: -100, visibility: "visible" },
		// 		{
		// 			xPercent: 0,
		// 			duration: this.isSmallDevices() ? 0.35 : 1.3,
		// 			stagger: 0.1,
		// 			ease: this.gsapEeasing,
		// 			delay: 0.3,
		// 		}
		// 	);
		// };

		return { logo, backdrop, backdropSecond };
	}
	// initial state
	public customBeforeAppear() {
		// console.log("ss", e);
		// e.classList.add("get-startet");
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
			cv
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
				footerLinks
			},
		};
	}
}
