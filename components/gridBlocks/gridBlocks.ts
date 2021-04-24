import { Vue, Component,Prop } from "nuxt-property-decorator";
@Component({
	name: "GridBlocks",
})
export default class GridBlocks extends Vue {
	@Prop({ type: Object })
	readonly gridContent!: Object | undefined;
}
