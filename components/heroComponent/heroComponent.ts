import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

@Component({
	name: "heroComponent",
})
export default class HeroComponent extends Vue {
	@Prop({ type: Object })
	readonly heroHeadline!: Object | undefined;
	@Prop({ type: Object })
	readonly heroBodytext!: Object | undefined;
	@Prop({ type: Object as () => NGlobal.IImage })
	readonly heroImage!: NGlobal.IImage;
	@Prop({ type: String || null })
	readonly heroSubtitle!: string | null;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}

	// gsap injection instance
	private $gsap!: any;

	private animateHeadlines() {
		const targets = document.querySelectorAll('[data-animate-headline]');
		const initIo = (target: any) => {
			const io = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const e = entry.target as HTMLElement

						setTimeout(() => {
							e.style.backgroundColor = "red";
							console.log("intersection observer");
						}, 1000);

					}
				})
			});
			io.observe(target);
		}
		targets.forEach(initIo);
	}

	private animateHeader() {



		// const targets = document.querySelectorAll('[data-animate-in]');

		// const initIo = (target: any) => {
		// 	const io = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
		// 		entries.forEach(entry => {
		// 			if (entry.isIntersecting) {
		// 				const e = entry.target as HTMLElement

		// 				e.style.backgroundColor = "red";

		// 			}
		// 		})
		// 	});
		// 	io.observe(target);
		// }
		// targets.forEach(initIo);

	}

	// get global application state
	get isApplicationReady() {
		return this.$store.state.application.isApplicationReady;
	}

	// watch if application is ready
	@Watch("isApplicationReady")
	isAppReady() {
		this.isApplicationReady && this.animateHeadlines();
		console.log("isAppReady watch");
	}

	@Watch('$route', { immediate: true, deep: true })
	onUrlChange() {
		if (this.isApplicationReady) {
			this.$nextTick(() => {
				this.animateHeadlines();
				console.log("onUrlChange watch");
			});
		}
	}
	mounted() {
		// this.$nextTick(() => {
		// 	this.animateHeadlines();
		// });
	}
}
