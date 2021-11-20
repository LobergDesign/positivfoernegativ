import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { head } from "~/utils/seo";
import { query } from "~/queries/advancedTextpage";

@Component
export default class AdvancedTextpage extends Vue {
	private seo: NGlobal.ISeo = {};
	head() {
		return head(this.seo);
	}

	async asyncData({ $dataApi, error, route }: Context) {
		const routePath = route.name as string;
		const response = await $dataApi.getDynamicData(query, routePath);
		const rsp = response.data as NDataFetch.IPages;
		const responseData = rsp.pageData?.items[0];
		if (!responseData) {
			return error({
				statusCode: response.status,
				message: response.errors,
			});
		}
		return { data: responseData, seo: responseData.seoSection };
	}
}
