import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component
export default class Error extends Vue {

    @Prop()
    readonly error!: object

	head() {
		return {
			title: "404",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Oops, noget gik galt",
				},
			],
		};
	}
}
