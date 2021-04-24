
import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { head } from "~/utils/seo";
import { getDynamicData } from "~/queries/coachingPageItem";
import { ISeo } from "~/interfaces/global";

@Component
export default class CoachingPageClass extends Vue {
	private seo: ISeo = {};
	head() {
		return head(this.seo);
	}
	async asyncData({ $dataApi, error, route }: Context) {
		const routePath = route.name as string;
		const response = await $dataApi.getDynamicData(getDynamicData, routePath);
		const responseData = response.data?.pageData?.items[0];

		if (!responseData) {
			return error({
				statusCode: response.status,
				message: response.errors,
			});
		}
		return { data: responseData};
	}
}
