import { Vue, Component, Prop } from "nuxt-property-decorator";
import { ISlider } from "~/interfaces/global";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
//@ts-ignore
import ArrowIcon from "~/assets/svg/youtube.svg?inline";
//@ts-ignore
import { Hooper, Slide, Pagination as HooperPagination, } from "hooper";
import "hooper/dist/hooper.css";

//@ts-ignore
import SvgArrow from "~/assets/svg/arrow--white.svg?inline";
@Component({
	name: "Slider",
	components: {
		SvgArrow,
		Hooper,
		Slide,
		HooperPagination
	},
})
export default class Slider extends Vue {
	@Prop({ type: Object as () => ISlider, required: true })
	readonly blockData!: ISlider;
	public maxLength: number = 220;
	
	public toHtmlStringWidthLimit(content: any) {
		const htmlString = documentToHtmlString(content);
		const setDots = htmlString.length > this.maxLength ? "..." : "";
		return htmlString.substring(0, this.maxLength) + setDots;
	}
	public toHtmlString(content: any) {
		const htmlString = documentToHtmlString(content);
		return htmlString;
	}
	// hooper slider
	public hooperSettings = {
		itemsToShow: 1,
		wheelControl: false,
	};
	mounted() {
		console.debug("blockData", this.blockData);
	}
}
