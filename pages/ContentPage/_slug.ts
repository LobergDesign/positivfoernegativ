import { Vue, Component } from "nuxt-property-decorator";
import { Context } from "vm";
import { getDynamicData } from "~/queries/contentPageItem";
import { head } from "~/utils/seo";
import { ISeo } from "~/interfaces/global";
@Component
export default class ContentPage extends Vue {
	private seo: ISeo = {};
	head() {
		return head(this.seo);
	}
	async asyncData({ $dataApi, route, error  }: Context) {
		const routePath = route.name as string;
		const response = await $dataApi.getDynamicData(getDynamicData, routePath);
		const responseData = response.data?.pageData?.items[0];
		if (!responseData) {
			return error({
				statusCode: response.status,
				message: response.errors,
			});
		}
		return { data: responseData, seo:responseData.seoSection };
	}
}

