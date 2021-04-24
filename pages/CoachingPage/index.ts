import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { ISeo } from "~/interfaces/global";
import { head } from "~/utils/seo";
import { query } from "~/queries/coaching";

@Component
export default class CoachingPageClass extends Vue {
	private seo: ISeo = {};
	head() {
		return head(this.seo);
	}

	async asyncData({ $dataApi, error }: Context) {
		const response = await $dataApi.getData(query);
		const responseData = response.data;
		if (!responseData?.coachingPage) {
			return error({
				statusCode: response.status,
				message: response.errors,
			});
		}
		const pageData = responseData.coachingPage;
		return { data: pageData, seo: pageData.seoSection };
	}
}
