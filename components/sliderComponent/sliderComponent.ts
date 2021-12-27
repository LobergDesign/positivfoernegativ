import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
//@ts-ignore
import ArrowIcon from "~/assets/svg/arrow--black.svg?inline";
//@ts-ignore
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import { ioScaleUp } from "~/utils/io";
import "hooper/dist/hooper.css";

//@ts-ignore
import SvgArrow from "~/assets/svg/arrow--white.svg?inline";
@Component({
	name: "Slider",
	components: {
		SvgArrow,
		Hooper,
		Slide,
		HooperPagination,
		ArrowIcon,
	},
})
export default class Slider extends Vue {
	@Prop({ type: Object as () => NComponents.ISlider, required: true })
	readonly blockData!: NComponents.ISlider;
	public maxLength: number = 200;
	private $gsap!: NGlobal.IGsap;
	public toHtmlStringWidthLimit(content: any) {
		const htmlString = documentToHtmlString(content);
		const setDots = htmlString.length > this.maxLength ? "..." : "";
		return htmlString.substring(0, this.maxLength) + setDots;
	}
	public toHtmlString(content: any) {
		const htmlString = documentToHtmlString(content);
		return htmlString;
	}
	// hooper slider
	public hooperSettings = {
		itemsToShow: 1,
		wheelControl: false,
	};

	// get global application state
	get isApplicationReady() {
		return this.$store.state.application.isApplicationReady;
	}
	private animateScaleUp() {
		const targets = document.querySelectorAll("[data-animate-scale-up]");
		ioScaleUp(targets, this.$gsap);
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
