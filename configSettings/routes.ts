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
	const mainItems = data.globalSettings.mainMenuCollection.items;
	const coachItems = data.coachingItemCollection.items;
	const contentPageItems = data.contentPageCollection.items;

	return {
		mainSitemap: mainItems,
		coachingItems: coachItems,
		contentPageItems: contentPageItems,
	};
};

export async function extendRoutes(routes: IRoutes[], resolve: (...param: string[]) => Vue) {
	const sitemaps = await siteStructure();
	const sitemapMain: ISitemapRoute[] = sitemaps.mainSitemap;
	const sitemapCoachingItems: ISitemapRoute[] = sitemaps.coachingItems;
	const sitemapContentPageItems: ISitemapRoute[] = sitemaps.contentPageItems;
	const sitemapRoutes: IRoutes[] = [];
	sitemapMain.forEach((route) => {
		if (route.model === "CoachingEntranceItem") {
			sitemapRoutes.push({
				path: `/${route.slug}/`,
				component: resolve(`~/pages/${route.model}/_slug.vue`),
				name: route.slug,
			});
		} else if(route.model !== "ContentPage"){
			sitemapRoutes.push({
				path: `/${route.slug}/`,
				component: resolve(`~/pages/${route.model}/index.vue`),
			});
		}
	});
	sitemapCoachingItems.forEach((route) => {
		sitemapRoutes.push({
			path: `/coaching/${route.slug}/`,
			component: resolve(`~/pages/CoachingPage/_slug.vue`),
			name: route.slug,
		});
	});
	sitemapContentPageItems.forEach((route) => {
		sitemapRoutes.push({
			path: `/${route.slug}/`,
			component: resolve(`~/pages/${route.model}/_slug.vue`),
			name: route.slug,
		});
	});
	return [...routes, ...sitemapRoutes];
}

export async function generate() {
	const sitemaps = await siteStructure();

	const sitemapMain: ISitemapRoute[] = sitemaps.mainSitemap;
	const sitemapCoachingItems: ISitemapRoute[] = sitemaps.coachingItems;
	const routes: any = [];
	sitemapMain.forEach((item: any) => {
		routes.push({
			route: `/${item.slug}/`,
		});
	});
	sitemapCoachingItems.forEach((item: any) => {
		routes.push({
			route: "/coaching/" + item.slug + "/",
		});
	});
	return routes;
}
