import { Vue, Component,Prop } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
@Component({
	name: "TextBlock",
})
export default class TextBlock extends Vue {
	@Prop({type: Object as () => NComponents.ITextBlock, required: true})
	readonly blockData!: NComponents.ITextBlock;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
