import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { pageQuery } from "~/queries/lecture";

@Component
export default class LecturePageClass extends Vue {
	head() {
		return {
			title: "LecturePage",
			meta: [{ hid: "description", name: "description", content: "this.metaDesc" }],
		};
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
		return { data: responseData.lecturePage };
	}
}
