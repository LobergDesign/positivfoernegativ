import { Vue, Component,Prop } from "nuxt-property-decorator";
import { ITextBlock } from "~/interfaces/global";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
@Component({
	name: "TextBlock",
})
export default class TextBlock extends Vue {
	@Prop({type: Object as () => ITextBlock, required: true})
	readonly blockData!: ITextBlock;
	public bodytext: object | null = this.blockData.bodytext || null;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
