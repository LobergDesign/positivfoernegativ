import { Vue, Component, Prop } from "nuxt-property-decorator";
import { IFooterObject } from "~/interfaces/global";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
//@ts-ignore
import SvgFacebook from "~/assets/svg/facebook.svg?inline";
//@ts-ignore
import SvgLinkedIn from "~/assets/svg/linkedin.svg?inline";
//@ts-ignore
import SvgInstagram from "~/assets/svg/instagram.svg?inline";
//@ts-ignore
import SvgYoutube from "~/assets/svg/youtube.svg?inline";
@Component({
	name: "FooterComponent",
	components: {
		SvgFacebook,
		SvgLinkedIn,
		SvgInstagram,
		SvgYoutube,
	},
})
export default class FooterComponent extends Vue {
	@Prop({ type: Object as () => IFooterObject, required: true })
	readonly footerData!: IFooterObject;

	public data = this.footerData.footerObject || {};
	mounted(){
		console.debug("footerData", this.footerData)
		console.debug("data", this.data)
	}
	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
