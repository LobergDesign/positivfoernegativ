import { Inject } from "@nuxt/types/app";
import { Context } from "vm";

export default function (ctx: Context, inject: Inject) {
	const client = ctx.app.$graphql;

	// handle preview
	const previewUrl = "https://pfoern-preview.netlify.app/";
	const setPreviewBool = process.env.BASE_URL === previewUrl || ctx.app.$config.baseUrl === previewUrl ? true : false;
	const isPreview = { isPreview: setPreviewBool };

	// get data funciton with query paramater
	const getData = async (query: string, preview: object = isPreview) => {
		try {
			return handleResponse(await client.default.request(query, preview));
		} catch (error: NDataFetch.IError | any) {
			return getErrorResponse(error);
		}
	};
	const getDynamicData = async (query: string, routePath: string) => {
		// Get path from route and set isPreview boolean
		const variables = { slug: routePath, isPreview: setPreviewBool };
		try {
			return handleResponse(await client.default.request(query, variables));
		} catch (error: NDataFetch.IError | any) {
			return getErrorResponse(error);
		}
	};

	// create response function to handle errors
	const handleResponse = async (response: NDataFetch.IResponse) => {
		const data = response;
		const { errors, status } = response;
		return {
			data,
			errors,
			status,
		};
	};

	// catch error
	const getErrorResponse = (error: NDataFetch.IError) => {
		return {
			ok: false,
			status: 500,
			statusText: error.message,
		};
	};

	// inject get data as dataApi to use in app as this.$dataApi
	inject("dataApi", {
		getData,
		getDynamicData,
	});
}
