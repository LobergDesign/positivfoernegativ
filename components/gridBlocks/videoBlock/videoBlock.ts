import { Vue, Component, Prop } from "nuxt-property-decorator";
//@ts-ignore
import lazyframe from "lazyframe";
//@ts-ignore
import SvgPlay from "~/assets/svg/play-button.svg?inline";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
@Component({
	name: "VideoBlock",
	components: {
		SvgPlay,
	},
})
export default class VideoBlock extends Vue {
	@Prop({ type: Object as () => NComponents.IVideoBlock, required: true })
	readonly blockData!: NComponents.IVideoBlock;

	public isReady: boolean = false;
	public isPlayerActive: boolean = false;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}

	public mounted() {
		const youtube = this.$refs.youtube as HTMLElement;
		lazyframe(youtube);
	}
}
