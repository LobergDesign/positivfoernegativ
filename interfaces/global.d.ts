declare namespace NGlobal {
	export interface IImage {
		readonly description?: string;
		readonly title?: string;
		readonly url?: string;
	}
	export interface ISeo {
		readonly metaDescription?: string;
		readonly metaOgImage?: NGlobal.IImage;
		readonly metaOgtitle?: string;
		readonly metaOgdescription?: string;
		readonly metaOgtype?: string;
		readonly metaOgurl?: string;
		readonly metaTitle?: string;
	}

	///// routes
	export interface IRoutes {
		name?: string;
		path: string;
		component: Vue;
	}
	export interface ISitemapRoute {
		model?: string;
		slug: string;
		name?: string;
		isCoachingSubpage?: boolean;
	}
	///// GSAP
	export interface IGsap {
		to: Function;
		registerPlugin: Function;
		set: Function;
		timeline: Function;
		getProperty: Function;
		fromTo: Function;
		from: Function;
		utils: any;
		quickSetter: Function;
	}
}




