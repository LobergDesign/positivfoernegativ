import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { query } from "~/queries/frontpage";
import { ISeo } from "~/interfaces/global";
import { head } from "~/utils/seo";
@Component
export default class FrontpageClass extends Vue {
	private seo: ISeo = {};
	head() {
		return head(this.seo);
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
		console.debug("sss", responseData);
		return { data: responseData.frontpage, seo:responseData.frontpage.seoSection };
	}
}
