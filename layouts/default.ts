import { Vue, Component } from "nuxt-property-decorator";
import { globalQuery } from "~/queries/global";
@Component
export default class Default extends Vue {
	public menuData: NLayout.IMenu = {};
	public footerData: NLayout.IFooterObject = {};
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
