import { Vue, Component, Prop } from "nuxt-property-decorator";
import { IImage, IMenu, IMenuItems } from "~/interfaces/global";
@Component({
	name: "headerComponent",
})
export default class HeaderComponent extends Vue {
	@Prop({ type: Object as () => IMenu, required: true })
	readonly menuData!: IMenu;
	public menuList: IMenuItems[] = this.menuData.mainMenuCollection || [];
	public logo: IImage = this.menuData.logo || {};
}
