import { Vue, Component,Prop } from "nuxt-property-decorator";
@Component({
	name: "ImageBlock",
})
export default class ImageBlock extends Vue {
	@Prop({type: Object as () => NComponents.IImageBlock, required: true}) 
	readonly blockData!: NComponents.IImageBlock;

	public imageItems = this.blockData.imagesCollection;
	public fullscreen = this.blockData.fullscreen;
}
