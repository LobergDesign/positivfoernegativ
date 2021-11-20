

import _Vue from "vue";

declare module "@nuxt/types" {
	export interface Context {
		$dataApi: {
			getData: (arg: string) => Promise<NDataFetch.IResponse>;
			getDynamicData: (arg: string, args: string) => Promise<NDataFetch.IResponse>;
		};
	}
}