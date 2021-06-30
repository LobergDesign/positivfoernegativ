import { GraphQLClient } from "graphql-request";
import { IRoutes, ISitemapRoute } from "~/interfaces/global";
import { query } from "../queries/sitemap";

const siteStructure = async () => {
	const endpoint = process.env.GRAPHQL_ENDPOINT as string;
	const previewUrl = "https://pfoern-preview.netlify.app/";
	const token = process.env.BASE_URL === previewUrl ? process.env.GRAPHQL_PREVIEW_TOKEN : process.env.GRAPHQL_TOKEN;
	const setPreviewBool = process.env.BASE_URL === previewUrl ? true : false;
	const isPreview = { isPreview: setPreviewBool };
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			authorization: "Bearer " + token,
		},
	});
	const data = await graphQLClient.request(query, isPreview);
	const simplePageItems = data.simpleTextPageCollection?.items;
	const advancedPageItems = data.advancedTextPageCollection?.items;
	const contactPage = data.contactPage;
	const sitemap = [...simplePageItems, ...advancedPageItems, contactPage];
	return {
		sitemap,
	};
};

export async function extendRoutes(routes: IRoutes[], resolve: (...param: string[]) => Vue) {
	const site = await siteStructure();
	const sitemapMain: ISitemapRoute[] = site.sitemap;
	const sitemapRoutes: IRoutes[] = [];

	sitemapMain.forEach((route) => {
		if (route.isCoachingSubpage === true) {
			sitemapRoutes.push({
				path: `/coaching/${route.slug}/`,
				component: resolve(`~/pages/${route.model}/_slug.vue`),
				name: route.slug,
			});
		} else {
			sitemapRoutes.push({
				path: `/${route.slug}/`,
				component: resolve(`~/pages/${route.model}/_slug.vue`),
				name: route.slug,
			});
		}
	});
	return [...routes, ...sitemapRoutes];
}

export async function generate() {
	const site = await siteStructure();
	const sitemapMain: ISitemapRoute[] = site.sitemap;
	const routes: any = [];
	if (routes.isCoachingSubpage === true) {
		sitemapMain.forEach((item: any) => {
			routes.push({
				route: `/coaching/${item.slug}/`,
			});
		});
	} else {
		sitemapMain.forEach((item: any) => {
			routes.push({
				route: `/${item.slug}/`,
			});
		});
	}
	return routes;
}
