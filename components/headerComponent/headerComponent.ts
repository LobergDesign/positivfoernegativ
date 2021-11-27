import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component({
	name: "headerComponent",
})
export default class HeaderComponent extends Vue {
	@Prop({ type: Object as () => NLayout.IMenu, required: true })
	readonly menuData!: NLayout.IMenu;
	public menuList: NLayout.IMenuItems[] = this.menuData.mainMenuCollection || [];
	public logo: NGlobal.IImage = this.menuData.logo || {};
	public isMenuActive: boolean = false;

	public toggleMenu() {
		this.isMenuActive = !this.isMenuActive;
	}

	// gsap injection instance
	private $gsap!: any;
	private $ScrollTrigger!: any;

	// gsap settings
	private gsapEase: string = "power3.out";


	private gsapTo(target: HTMLElement, yPercent: number, duration: number) {
		return this.$gsap.to(target, { yPercent: yPercent, duration: duration, ease: this.gsapEase });
	}
	private controlHeader() {
		const initScrolltrigger = this.$ScrollTrigger.create({
			start: "top",
			onUpdate: (self: any) => {
				const { direction } = self;
				// header element
				const headerItem = this.$refs.header as HTMLElement;
				if (!this.isMenuActive) {
					// mousewheel down
					direction === 1 && this.gsapTo(headerItem, -100, 0.8);

					// mousewheel up
					direction === -1 && this.gsapTo(headerItem, 0, 1);
				}
			},
		});


		initScrolltrigger.enable();
	}

	public mounted() {
		this.$nextTick(() => {
			setTimeout(() => {
				this.controlHeader();
			}, 1000);
		})
	}
}
