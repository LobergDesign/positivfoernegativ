declare namespace NLayout{
  interface IFooter {
		readonly empowerMind?: NGlobal.IImage;
		readonly empowerMindBodytext?: object;
		readonly cv?: NGlobal.IImage;
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
	export interface IFooterObject {
		readonly footerObject?: NLayout.IFooter;
	}
  export interface IMenuItems {
    readonly slug?: string;
    readonly __typename?: string;
  }
  export interface IMenu {
    readonly mainMenuCollection?: Array<IMenuItems>;
    readonly logo?: NGlobal.IImage;
    readonly linkName?: string;
  }
}