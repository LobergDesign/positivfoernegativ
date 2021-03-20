import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { query } from "~/queries/contact";

@Component
export default class ContactPage extends Vue {
	head() {
		return {
			title: "Coaching",
			meta: [{ hid: "description", name: "description", content: "this.metaDesc" }],
		};
	}
	async asyncData({ $dataApi, error }: Context) {
		const response = await $dataApi.getData(query);
		const responseData = response.data;
		if(!responseData?.contactPage){
			return error({
				statusCode: response.status,
				message: response.errors
			});
		}
		return { data: responseData.contactPage };
	}
}