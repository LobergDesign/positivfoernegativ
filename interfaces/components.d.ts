declare namespace NComponents{

	//////// blocks
	export interface IImageBlock {
		readonly imagesCollection?: Array<NGlobal.IImage>;
		readonly fullscreen?: boolean;
	}
	export interface IVideoBlock {
		readonly image?: NGlobal.IImage;
		readonly youTubeId?: string;
		readonly videoCaption?: object;
	}
	export interface ITextBlock {
		readonly bodytext?: object;
	}
	export interface IImageTextBlock {
		readonly label?: string;
		readonly bodytext?: object;
		readonly image?: NGlobal.IImage;
	}
	export interface ICoachingBlock {
		readonly title?: string;
		readonly subtitle?: string;
		readonly link?: object;
		readonly listItemsCollection?: Array<object>;
	}
	export interface ISlider {
		readonly sliderItemsCollection?: object;
	}
	export interface IProcessItem {
		readonly headline?: string;
		readonly bodytext?: object;
		readonly image?: NGlobal.IImage;
	}
	
}