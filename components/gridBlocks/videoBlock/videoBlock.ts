import { Vue, Component, Prop } from "nuxt-property-decorator";
import { IVideoBlock } from "~/interfaces/global";
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
	@Prop({ type: Object as () => IVideoBlock, required: true })
	readonly blockData!: IVideoBlock;

	public isReady: boolean = false;
	public isPlayerActive: boolean = false;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}

	public mounted() {
		const youtube = this.$refs.youtube as HTMLElement;

		lazyframe(youtube);
		setTimeout(() => {
			const ifrmae = youtube.querySelector("iframe") as HTMLIFrameElement;
			console.debug("lazyframe(youtube)", ifrmae);
		}, 500);
	}
}
