import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { query } from "~/queries/frontpage";

@Component
export default class FrontpageClass extends Vue {
	head() {
		return {
			title: "frontpage",
			meta: [{ hid: "description", name: "description", content: "this.metaDesc" }],
		};
	}

	async asyncData({ $dataApi, error }: Context) {
		const response = await $dataApi.getData(query);
		const responseData = response.data;
		if(!responseData?.frontpage){
			return error({
				statusCode: response.status,
				message: response.errors
			});
		}
		return { data: responseData.frontpage };
	}
}
