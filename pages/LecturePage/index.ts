import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { pageQuery } from "~/queries/lecture";
import { head } from "~/utils/seo";
import { ISeo } from "~/interfaces/global";
@Component
export default class LecturePageClass extends Vue {
	private seo: ISeo = {};
	head() {
		return head(this.seo);
	}

	async asyncData({ $dataApi, error }: Context) {
		const response = await $dataApi.getData(pageQuery);
		const responseData = response.data;
		if(!responseData?.lecturePage){
			return error({
				statusCode: response.status,
				message: response.errors
			});
		}
		return { data: responseData.lecturePage, seo:responseData.lecturePage.seoSection };
	}
}
