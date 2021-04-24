import { Vue, Component, Prop } from "nuxt-property-decorator";
import { IVideoBlock } from "~/interfaces/global";
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

	public isPlayerActive: boolean = false;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
	private playvideo() {
		const youtube = this.$refs.youtube as any;
		console.debug("youtube", youtube);
		
	}
	public onPlayerReady(event:any) {
		 console.debug("event", event);
		event.target.playVideo();
	}
	// toggle video player
	public toggleVideoPlayer() {
		this.isPlayerActive = !this.isPlayerActive;
		this.playvideo();
	}
}
