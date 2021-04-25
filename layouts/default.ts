import { Vue, Component } from "nuxt-property-decorator";
import { IFooterObject, IMenu } from "~/interfaces/global";
import { globalQuery } from "~/queries/global";
import {query} from "~/queries/sitemap";
@Component
export default class Default extends Vue {
	public menuData: IMenu = {};
	public footerData: IFooterObject = {};
	async fetch() {
		const response = await this.$nuxt.context.$dataApi.getData(globalQuery);
		const responseMenuCollection = await this.$nuxt.context.$dataApi.getData(query);
		const mainMenuCollection = responseMenuCollection?.data?.globalSettings?.mainMenuCollection;
		const footerLinks = response?.data?.globalSettingsCollection?.items[0]?.footerLinksCollection;
		const {
			logo,
			empowerMind,
			empowerMindText,
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
		} = response.data.globalSettings;
		this.menuData = { mainMenuCollection, logo };
		this.footerData = {
			footerObject: {
				empowerMind,
				empowerMindText,
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
