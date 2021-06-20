import { Vue, Component, Prop } from "nuxt-property-decorator";


@Component({
	name: "Recommendations"
})
export default class Recommendations extends Vue {
	@Prop({ type: Object as () => any })
	readonly blockData!: any;


	

	public mounted() {
		console.debug("sfdsfsdf", this.blockData)
	}
}
