import { Vue, Component,Prop } from "nuxt-property-decorator";
import { IImageBlock } from "~/interfaces/global";
@Component({
	name: "ImageBlock",
})
export default class ImageBlock extends Vue {
	@Prop({type: Object as () => IImageBlock, required: true}) 
	readonly blockData!: IImageBlock;

	public imageItems = this.blockData.imagesCollection;
	public fullscreen = this.blockData.fullscreen;
}
