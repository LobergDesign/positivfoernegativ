import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { inviewAnimationHeadline } from "~/utils/transitions";
import io from "~/utils/io";

@Component({
	name: "heroComponent",
})
export default class HeroComponent extends Vue {
	@Prop({ type: Object })
	readonly heroHeadline!: Object | undefined;
	@Prop({ type: Object })
	readonly heroBodytext!: Object | undefined;
	@Prop({ type: Object as () => NGlobal.IImage })
	readonly heroImage!: NGlobal.IImage;
	@Prop({ type: String || null })
	readonly heroSubtitle!: string | null;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}

	// gsap injection instance
	private $gsap!: any;

	private animateHeadlines() {

		const targets = document.querySelectorAll('[data-animate-headline-in]');
		// set initial value
		targets.forEach((entry: any) => {
			inviewAnimationHeadline(entry, this.$gsap).init();
		});
		io(targets, this.$gsap);
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
