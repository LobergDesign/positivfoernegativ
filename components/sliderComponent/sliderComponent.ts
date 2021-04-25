import { Vue, Component, Prop } from "nuxt-property-decorator";
import { ISlider } from "~/interfaces/global";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
//@ts-ignore
import SvgArrow from "~/assets/svg/arrow--white.svg?inline";
@Component({
	name: "Slider",
	components: {
		SvgArrow
	}
})
export default class Slider extends Vue {
	@Prop({ type: Object as () => ISlider, required: true })
	readonly blockData!: ISlider;
	public maxLength:number = 220;
	public toHtmlString(content: any) {
		const htmlString = documentToHtmlString(content);
		const setDots = (htmlString.length > this.maxLength) ? '...' : "";
		return htmlString.substring(0, this.maxLength) + setDots;
	}
	mounted(){
		console.debug("blockData", this.blockData);
	}
}
