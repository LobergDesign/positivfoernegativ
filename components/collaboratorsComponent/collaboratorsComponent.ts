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
		wheelControl: false,
		breakpoints: {
			200: {
				itemsToShow: 1,
				itemsToSlide: 1,
			},
			1000: {
				itemsToShow: 3,
				itemsToSlide: 3,
			},
		},
	};
	async fetch() {
		const response = await this.$nuxt.context.$dataApi.getData(query);
		const rsp = response.data as NDataFetch.IPages;
		this.blockData = rsp.globalDataCollaboratorsCollection;
	}
}
