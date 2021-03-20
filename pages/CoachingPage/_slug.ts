
import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { getDynamicData } from "~/queries/coachingPageItem";

@Component
export default class CoachingPageClass extends Vue {
	async asyncData({ $dataApi, error, route }: Context) {
		const routePath = route.params.slug;
		const variables = { slug: routePath };
		const response = await $dataApi.getDynamicData(getDynamicData, variables);
		const responseData = response.data?.pageData?.items[0];
		if (!responseData) {
			return error({
				statusCode: response.status,
				message: response.errors,
			});
		}
		return { data: responseData };
	}
}
