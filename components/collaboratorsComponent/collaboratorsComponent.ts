import { Vue, Component } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { query } from "~/queries/collaborators";
//@ts-ignore
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
@Component({
	name: "Collaborators",
	components: {
		Hooper,
		Slide,
		HooperNavigation,
	},
})
export default class Collaborators extends Vue {
	public blockData: {} = {};
	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
	// hooper slider
	public hooperSettings = {
		itemsToShow: 3,
		wheelControl: false,
		itemsToSlide: 3,
	};
	async fetch() {
		const response = await this.$nuxt.context.$dataApi.getData(query);
		this.blockData = response.data?.globalDataCollaboratorsCollection;
		console.debug("respdosddnse", response.data?.globalDataCollaboratorsCollection)
	}
}
