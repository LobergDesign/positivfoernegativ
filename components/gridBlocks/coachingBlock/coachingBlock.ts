import { Vue, Component, Prop } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
//@ts-ignore
import SvgArrow from "~/assets/svg/arrow--white.svg?inline";
@Component({
	name: "CoachingBlock",
	components: {
		SvgArrow,
	},
})
export default class CoachingBlock extends Vue {
	@Prop({ type: Object as () => NComponents.ICoachingBlock, required: true })
	readonly blockData!: NComponents.ICoachingBlock;
	public maxLength: number = 220;
	public toHtmlString(content: any) {
		const htmlString = documentToHtmlString(content);
		const setDots = htmlString.length > this.maxLength ? "..." : "";
		return htmlString.substring(0, this.maxLength) + setDots;
	}
}
