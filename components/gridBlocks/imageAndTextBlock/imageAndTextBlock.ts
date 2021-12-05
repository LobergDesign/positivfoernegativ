import { Vue, Component,Prop } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
@Component({
	name: "ImageAndTextBlock",
})
export default class ImageAndTextBlock extends Vue {
	@Prop({type: Object as () => NComponents.IImageTextBlock, required: true})
	readonly blockData!: NComponents.IImageTextBlock;

	public label: string | null = this.blockData.label || null;
	public image: NGlobal.IImage | null = this.blockData.image || null;
	public bodytext: object | null = this.blockData.bodytext || null;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
