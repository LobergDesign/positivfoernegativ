import { Context } from "vm";

export default function (ctx: Context, inject: any) {
	const client = ctx.app.$graphql;
	const previewUrl = "https://pfoern-preview.netlify.app/";
const isPreview = (process.env.BASE_URL === previewUrl || ctx.app.$config.baseUrl === previewUrl) ? true: false;
console.debug("isPreview", isPreview);
	// get data funciton with query paramater
	const getData = async (query: any) => {
		try {
			return handleResponse(await client.default.request(query));
		} catch (error: any) {
			return getErrorResponse(error);
		}
	};
	const getDynamicData = async (query: any, vars:any) => {
		try {
			return handleResponse(await client.default.request(query, vars));
		} catch (error: any) {
			return getErrorResponse(error);
		}
	};

	// create response function to handle errors
	const handleResponse = async (response: any) => {
		const data = await response;
		const { errors, status } = response;
		return {
			data,
			errors,
			status,
		};
	};

	// catch error
	const getErrorResponse = (error: any) => {
		return {
			ok: false,
			status: 500,
			statusText: error.message,
		};
	};

	// inject get data as dataApi to use in app as this.$dataApi
	inject("dataApi", {
		getData,
		getDynamicData
	});
}
