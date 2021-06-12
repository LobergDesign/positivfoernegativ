import { NuxtError } from "@nuxt/types";

declare interface IInjectMethod{
	getDynamicData: Function;
	getData: Function;
}

// Context
declare module "@nuxt/types" {
	interface Context {
		$dataApi: IInjectMethod;
	}
}
declare interface IGraphQlClient {
	readonly request: Function;
}

declare interface IImage {
	readonly description?: string;
	readonly title?: string;
	readonly url?: string;
}

declare interface ISeo {
	readonly metaDescription?: string;
	readonly metaOgImage?: IImage;
	readonly metaOgtitle?: string;
	readonly metaOgdescription?: string;
	readonly metaOgtype?: string;
	readonly metaOgurl?: string;
	readonly metaTitle?: string;
}
//////// global data
declare interface IFooter {
	readonly empowerMind?: IImage;
	readonly empowerMindBodytext?: object;
	readonly cv?: IImage;
	readonly adresse?: string;
	readonly email?: string;
	readonly phonenumber?: string;
	readonly zipcodeAndCity?: string;
	readonly facebook?: string;
	readonly instagram?: string;
	readonly linkedIn?: string;
	readonly youTube?: string;
	readonly footerText?: object;
	readonly footerLinks?: Array<object>;
}
declare interface IFooterObject {
	readonly footerObject?: IFooter;
}
declare interface IMenuItems {
	readonly slug?: string;
	readonly __typename?: string;
}
declare interface IMenu {
	readonly mainMenuCollection?: Array<IMenuItems>;
	readonly logo?: IImage;
	readonly linkName?: string;
}

declare interface IHero {
	readonly pageHeadline?: object;
	readonly bodytext?: object;
	readonly image?: IImage;
	readonly subtitle?: string;
}
//////// blocks
declare interface IImageBlock {
	readonly imagesCollection?: Array<IImage>;
	readonly fullscreen?: boolean;
}
declare interface IVideoBlock {
	readonly image?: IImage;
	readonly youTubeId?: string;
	readonly videoCaption?: object;
}
declare interface ITextBlock {
	readonly bodytext?: object;
}
declare interface IImageTextBlock {
	readonly label?: string;
	readonly bodytext?: object;
	readonly image?: IImage;
}
declare interface ICoachingBlock {
	readonly title?: string;
	readonly subtitle?: string;
	readonly link?: object;
	readonly listItemsCollection?: Array<object>;
}
declare interface ISlider {
	readonly sliderItemsCollection?: object;
}
///////// components
export declare interface IProcessItem {
	readonly headline?: string;
	readonly bodytext?: object;
	readonly image?: IImage;
}
declare interface IProcess {
	readonly coachingProcessCollection?: Array<IProcessItem>;
	readonly coachingProcessTitle?: object;
}

///// routes
declare interface IRoutes {
	name?: string;
	path: string;
	component: Vue;
}
declare interface ISitemapRoute {
	model?: string;
	slug: string;
	name?: string;
}
declare interface IGenerateRoute {
	route: string;
	id?: string;
}
