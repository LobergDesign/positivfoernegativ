import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
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

	// get global application state
	get isApplicationReady() {
		return this.$store.state.application.isApplicationReady;
	}

	//
	@Watch("isApplicationReady")
	isAppReady() {
		this.isApplicationReady && this.headerInitAnimmation();
	}
	// gsap injection instance
	private $gsap!: any;
	private $ScrollTrigger!: any;

	// gsap settings
	private gsapEeasing: string = "power4.out";

	// initial animation
	private headerInitAnimmation() {
		const header = this.$refs.header;
		const tl = this.$gsap.timeline();

		tl.fromTo(header, { yPercent: -100 }, {
			duration: 1,
			yPercent: 0,
			ease: this.gsapEeasing,
		})

	}

	private gsapTo(target: HTMLElement, yPercent: number) {
		return this.$gsap.to(target, { yPercent: yPercent, duration: 1.2, ease: this.gsapEeasing });
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
					direction === 1 && this.gsapTo(headerItem, -100);

					// mousewheel up
					direction === -1 && this.gsapTo(headerItem, 0);
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
