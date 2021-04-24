import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { head } from "~/utils/seo";
import { query } from "~/queries/contact";
import { ISeo } from "~/interfaces/global";

@Component
export default class ContactPage extends Vue {
	private seo: ISeo = {};
	head() {
		return head(this.seo);
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
		return { data: responseData.contactPage, seo: responseData.contactPage.seoSection };
	}
}