import { Vue, Component, Prop } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
//@ts-ignore
import { Hooper, Slide,   Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
@Component({
	name: "Recommendations",
	components: {
		Hooper,
		Slide,
		HooperNavigation
	},
})
export default class Recommendations extends Vue {
	@Prop({ type: Object as () => {} })
	readonly blockData!: {};

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
	// hooper slider
	public hooperSettings = {
		itemsToShow: 1,
		wheelControl: false,
	};
	public mounted() {
		console.debug("sfdsfsdf", this.blockData);
	}
}
