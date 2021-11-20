import { Vue, Component, Prop } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

@Component({
	name: "ProcessListComponent",
})
export default class ProcessListComponent extends Vue {
	@Prop({ type: String })
	readonly processContentTitle!: string;

	@Prop({ type: Array as () => NComponents.IProcessItem, required: true })
	readonly processContentList!: NComponents.IProcessItem;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
