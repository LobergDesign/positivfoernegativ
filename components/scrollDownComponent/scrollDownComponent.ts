import { Vue, Component } from "nuxt-property-decorator";

@Component({
	name: "ScrollDown",
})
export default class ScrollDown extends Vue {
		// gsap injection instance
		private $gsap!: any;
		private $ScrollTrigger!: any;
	
		// gsap settings
		private gsapEase: string = "power3.out";
	
	
		private gsapTo(target: HTMLElement, yPercent: number, duration: number, opacity:number) {
			return this.$gsap.to(target, { yPercent: yPercent, duration: duration, opacity: opacity, ease: this.gsapEase });
		}
		private controlHeader() {
			const initScrolltrigger = this.$ScrollTrigger.create({
				start: "top",
				onUpdate: (self: any) => {
					// console.log("window", self.scroller.window.scrollY)
					const { scroller } = self;
					const scrollY:number=scroller.window.scrollY;
					// header element
					const headerItem = this.$refs.scrollDown as HTMLElement;
		
					scrollY > 250 ? this.gsapTo(headerItem, -200, 1, 0):this.gsapTo(headerItem, 0, 1, 1);
					
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
