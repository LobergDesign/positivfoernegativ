import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { ioHeadlineLine } from "~/utils/io";
@Component({
	name: "ImageAndTextBlock",
})
export default class ImageAndTextBlock extends Vue {
	@Prop({ type: Object as () => NComponents.IImageTextBlock, required: true })
	readonly blockData!: NComponents.IImageTextBlock;

	public label: string | null = this.blockData.label || null;
	public image: NGlobal.IImage | null = this.blockData.image || null;
	public bodytext: object | null = this.blockData.bodytext || null;
	private $gsap!: NGlobal.IGsap;
	// get global application state
	get isApplicationReady() {
		return this.$store.state.application.isApplicationReady;
	}
	private animateHeadlineLines() {
		const targets = document.querySelectorAll("[data-animate-headline-line-label]");
		const lines = document.querySelector("[data-animate-headline-line]") as HTMLDivElement;
		ioHeadlineLine(targets, lines, this.$gsap);
	}

	// watch if application is ready
	@Watch("isApplicationReady")
	isAppReady() {
		this.isApplicationReady && this.animateHeadlineLines();
	}

	@Watch("$route", { immediate: true, deep: true })
	onUrlChange() {
		if (this.isApplicationReady) {
			this.$nextTick(() => {
				this.animateHeadlineLines();
			});
		}
	}
}
