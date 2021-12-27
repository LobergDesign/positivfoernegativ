import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { ioBodytext } from "~/utils/io";

@Component({
	name: "bodytext",
})
export default class Bodytext extends Vue {

	@Prop({ type: Object })
	readonly bodytext!: Object | undefined;
	private $gsap!: NGlobal.IGsap;
	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}

	// get global application state
	get isApplicationReady() {
		return this.$store.state.application.isApplicationReady;
	}

	private animateBodytext() {
		const targets = document.querySelectorAll("[data-animate-bodytext]");
		ioBodytext(targets, this.$gsap);
	}

	// watch if application is ready
	@Watch("isApplicationReady")
	isAppReady() {
		this.isApplicationReady && this.animateBodytext();
	}

	@Watch('$route', { immediate: true, deep: true })
	onUrlChange() {
		if (this.isApplicationReady) {
			this.$nextTick(() => {
				this.animateBodytext();
			});
		}
	}
}
