import { Vue, Component, Prop } from "nuxt-property-decorator";
import { ICoachingBlock } from "~/interfaces/global";
import { query } from "~/queries/coachingItemCollection";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
//@ts-ignore
import SvgArrow from "~/assets/svg/arrow--white.svg?inline";
@Component({
	name: "CoachingBlock",
	components: {
		SvgArrow
	}
})
export default class CoachingBlock extends Vue {
	@Prop({ type: Object as () => ICoachingBlock, required: true })
	readonly blockData!: ICoachingBlock;
	public items: [] = [];

	mounted() {
		console.debug("this.blo", this.blockData);
		this.$fetch();
	}
	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
	async fetch() {
		const response = await this.$nuxt.context.$dataApi.getData(query);
		if (response) {
			this.items = response.data?.coachingItemCollection?.items;
		}
	}
}
