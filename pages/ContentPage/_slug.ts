import { Vue, Component } from "nuxt-property-decorator";
import { Context } from "vm";
import { getDynamicData } from "~/queries/contentPageItem";

@Component
export default class ContentPage extends Vue {
	async asyncData({ $dataApi, route, error  }: Context) {
		const routePath = route.name as string;
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

