import { Vue, Component, Prop } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { IProcess, IProcessItem } from "~/interfaces/global";

@Component({
	name: "ProcessListComponent",
})
export default class ProcessListComponent extends Vue {
	@Prop({ type: String })
	readonly processContentTitle!: string;

	@Prop({ type: Array as () => IProcessItem, required: true })
	readonly processContentList!: IProcessItem;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
