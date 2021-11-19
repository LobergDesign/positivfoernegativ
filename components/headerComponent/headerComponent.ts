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
	public isMenuActive: boolean = false;

	public toggleMenu() {
		this.isMenuActive = !this.isMenuActive;
	}

	// gsap injection instance
	private $gsap!: any;
	private $ScrollTrigger!: any;

	private controlHeader() {
		const initScrolltrigger = this.$ScrollTrigger.create({
			start: "top",
			onUpdate: (self: any) => {
				const { direction } = self;
				// header element
				const headerItem = this.$refs.header as HTMLElement;

				// mousewheel up
				if (direction == -1) {
					if (!this.isMenuActive) {
						this.$gsap.to(headerItem, { yPercent: 0, duration: 0.6, ease: "power1.out" });
					}
				}
				// mousewheel down
				if (direction === 1) {
					if (!this.isMenuActive) {
						this.$gsap.to(headerItem, { yPercent: -100, duration: 0.6, ease: "power1.out" });
					}
				}
			},
		});

		initScrolltrigger.enable();
	}

	public mounted() {
		this.controlHeader();
	}
}
