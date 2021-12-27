import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { ioBackdropUp } from "~/utils/io";
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


	private $gsap!: NGlobal.IGsap;
	// get global application state
	get isApplicationReady() {
		return this.$store.state.application.isApplicationReady;
	}
	private animateScaleUp() {
		const targets = document.querySelectorAll("[data-animate-backdrop-in-element");
		const backdrop = document.querySelector("[data-animate-backdrop-in]") as HTMLDivElement;
		ioBackdropUp(targets, backdrop, this.$gsap);
	}

	// watch if application is ready
	@Watch("isApplicationReady")
	isAppReady() {
		this.isApplicationReady && this.animateScaleUp();
	}

	@Watch('$route', { immediate: true, deep: true })
	onUrlChange() {
		if (this.isApplicationReady) {
			this.$nextTick(() => {
				this.animateScaleUp();
			});
		}
	}

}
