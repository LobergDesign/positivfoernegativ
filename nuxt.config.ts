import { extendRoutes, generate } from "./configSettings/routes";
export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "positivfoernegativ",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
	publicRuntimeConfig: {
		baseUrl: process.env.BASE_URL,
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/scss/site.scss"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["~/plugins/cms/cms"],
	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: [
		{ path: "~/components", extensions: ["vue"] },
		{ path: "~/components/gridBlocks", extensions: ["vue"] },
	],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build",
		"@nuxt/image",
		"nuxt-gsap-module",
		"nuxt-purgecss",
		"nuxt-graphql-request",
		"nuxt-font-loader",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxtjs/svg", "@nuxtjs/robots", "@nuxtjs/sitemap"],
	graphql: {
		clients: {
			default: {
				endpoint: process.env.GRAPHQL_ENDPOINT,
				options: {
					headers: {
						authorization:
							"Bearer " +
							(process.env.BASE_URL === "https://pfoern-preview.netlify.app/"
								? process.env.GRAPHQL_PREVIEW_TOKEN
								: process.env.GRAPHQL_TOKEN),
					},
				},
			},
		},
	},
	image: {
		screens: {
			xs: 350,
			sm: 576,
			md: 992,
			lg: 1025,
			xl: 1440,
			xxl: 1920,
			"2xl": 1920,
		},
		customProvider: {
			name: "customProvider", // optional value to overrider provider name
			provider: "~/configSettings/customProvider", // Path to custom provider
			options: {
				format: "webp",
			},
		},
	},
	router: {
		trailingSlash: true,
		linkActiveClass: "is-active",
		extendRoutes: async (routes: any, resolve: (...param: string[]) => Vue) => await extendRoutes(routes, resolve),
	},
	generate: {
		subFolders: true,
		fallback: true,
		crawler: false,
		// exclude pages thats unused
		exclude: [/LecturePage/, /ContactPage/, /ContentPage/, /AdvancedTextPage/],
		routes: async () => await generate(),
	},
	/*
	 ** add robots.txt to application
	 */
	robots: {
		UserAgent: "*",
		Disallow: process.env.ROBOTS === "false" ? "/" : "",
		Sitemap: process.env.BASE_URL + "/sitemap.xml",
	},
	/*
	 ** sitemap settings
	 */
	sitemap: {
		hostname: process.env.BASE_URL || "https://www.pfoern.dk/",
		exclude: ["/LecturePage/", "/ContactPage/", "/ContentPage/, /AdvancedTextPage/"],
		// add trailing slash to final sitemap
		trailingSlash: true,
		priority: 1,
		path: "/sitemap.xml",
		gzip: true,
		generate: false,
	},
	fontLoader: {
		// Paste a google link here
		url: {
			google: "https://fonts.googleapis.com/css2?&family=Source+Sans+Pro:wght@400;600;700&family=PT+Serif:wght@400;700&display=swap",
		},

		// Enable options
		prefetch: true,
		preconnect: true,
	},
	ssr: process.env.BASE_URL === "https://pfoern-preview.netlify.app/" ? false : true,
	purgeCSS: {
		// whitelist spicific classes
		whitelist: ["is-active"],
		// whitelist spicific classes and all that contains that naming
		whitelistPatterns: [
			/__layout/,
			/__nuxt/,
			/cls/,
			/hooper/,
			/is/,
			/img/,
			/strong/,
			/input/,
			/b/,
			/svg/,
			/ol/,
			/coi/,
			/hooper/,
		],
	},
	/*
	 ** page transitions
	 */
	pageTransition: {
		name: "slide",
		mode: "out-in",
		css: false,

		beforeEnter(el: HTMLElement) {
			//@ts-ignore
			this.$gsap.set(el, {
				opacity: 0,
			});
		},

		enter(el: HTMLElement, done: boolean) {
			//@ts-ignore
			this.$gsap.to(el, {
				opacity: 1,
				duration: 0.5,
				ease: "power1.inOut",
				onComplete: done,
			});
		},

		leave(el: HTMLElement, done: boolean) {
			//@ts-ignore
			this.$gsap.to(el, {
				opacity: 0,
				duration: 0.4,
				ease: "power1.inOut",
				onComplete: done,
			});
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		// analyze: {
		//   analyzerMode: "static",
		// },
	},
	loading: false,
	loaders: {
		ts: {
			silent: true,
		},
	},
};
