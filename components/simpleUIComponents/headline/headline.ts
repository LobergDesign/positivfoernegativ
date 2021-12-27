import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { ioHeadlines } from "~/utils/io";

@Component({
	name: "headline",
})
export default class Headline extends Vue {

	@Prop({ type: [Object, String] })
	readonly headline!: Object | undefined | string;

	@Prop({ type: Number })
	readonly size!: null;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}

	// gsap injection instance
	private $gsap!: any;

	private animateHeadlines() {
		const targets = document.querySelectorAll('[data-animate-headline-in]');
		ioHeadlines(targets, this.$gsap);
	}

	// get global application state
	get isApplicationReady() {
		return this.$store.state.application.isApplicationReady;
	}

	// watch if application is ready
	@Watch("isApplicationReady")
	isAppReady() {
		this.isApplicationReady && this.animateHeadlines();
	}

	@Watch('$route', { immediate: true, deep: true })
	onUrlChange() {
		if (this.isApplicationReady) {
			this.$nextTick(() => {
				this.animateHeadlines();
			});
		}
	}
}
