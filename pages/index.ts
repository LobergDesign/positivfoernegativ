import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { query } from "~/queries/frontpage";
import { head } from "~/utils/seo";
@Component
export default class FrontpageClass extends Vue {
	private seo: NGlobal.ISeo = {};
	head() {
		return head(this.seo);
	}

	async asyncData({ $dataApi, error }: Context) {
		const response = await $dataApi.getData(query);
		const responseData = response.data as NDataFetch.IPages;
		if(!responseData?.frontpage){
			return error({
				statusCode: response.status,
				message: response.errors
			});
		}

		return { data: responseData.frontpage, seo:responseData.frontpage.seoSection };
	}
}
