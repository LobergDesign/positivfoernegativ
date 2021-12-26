import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { inviewAnimationBodyText } from "~/utils/transitions";
import io from "~/utils/io";

@Component({
	name: "bodytext",
})
export default class Bodytext extends Vue {

	@Prop({ type: Object })
	readonly bodytext!: Object | undefined;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}

	// gsap injection instance
	private $gsap!: any;

	// get global application state
	get isApplicationReady() {
		return this.$store.state.application.isApplicationReady;
	}

	// watch if application is ready
	@Watch("isApplicationReady")
	isAppReady() {
		this.isApplicationReady && inviewAnimationBodyText;
	}

	@Watch('$route', { immediate: true, deep: true })
	onUrlChange() {
		if (this.isApplicationReady) {
			this.$nextTick(() => {
				inviewAnimationBodyText;
			});
		}
	}
	mounted() {
		// this.$nextTick(() => {
		// 	this.animateHeadlines();
		// });
	}
}
