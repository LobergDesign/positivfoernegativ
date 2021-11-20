declare namespace NDataFetch{
	export interface IResponse {
		status: number;
		errors: string;
		data: Object;
		frontpage: any;
	}
  export interface IError {
		message: string;
	}
	export interface IPages{
		frontpage: any;
		seoSection:any;
		pageData: any;
		globalSettings: any;
		contactPage:any;
		globalDataCollaboratorsCollection: any;
	}
}