import { Vue, Component, Prop } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

@Component({
	name: "HeroSplitComponent",
})
export default class HeroSplitComponent extends Vue {
	@Prop({ type: Object })
	readonly heroHeadline!: Object | undefined;
	@Prop({ type: Object})
	readonly heroBodytext!: Object | undefined;
	@Prop({ type: Object as () => NGlobal.IImage })
	readonly heroImage!: NGlobal.IImage;
	@Prop({ type: String || null })
	readonly heroSubtitle!: string | null;
	
	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
