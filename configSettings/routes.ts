import { GraphQLClient } from "graphql-request";
import { IRoutes, ISitemapRoute } from "~/interfaces/global";
import { query } from "../queries/sitemap";

const siteStructure = async () => {
	const endpoint = process.env.GRAPHQL_ENDPOINT as string;
	const token = process.env.GRAPHQL_TOKEN;
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			authorization: "Bearer " + token,
		},
	});
	const data = await graphQLClient.request(query);
	const mainItems = data.globalSettings.mainMenuCollection.items;
	const coachItems = data.coachingItemCollection.items;

	return {
		mainSitemap: mainItems,
		coachingItems: coachItems,
	};
};

export async function extendRoutes(routes: IRoutes[], resolve: (...param: string[]) => Vue) {
	const sitemaps = await siteStructure();
	const sitemapMain: ISitemapRoute[] = sitemaps.mainSitemap;
	const sitemapCoachingItems: ISitemapRoute[] = sitemaps.coachingItems;
	const sitemapRoutes: IRoutes[] = [];

	sitemapMain.forEach((route) => {
		if (route.model === "ContentPage") {
			sitemapRoutes.push({
				path: `/${route.slug}/`,
				component: resolve(`~/pages/${route.model}/_slug.vue`),
				name: route.slug,
			});
		} else {
			sitemapRoutes.push({
				path: `/${route.slug}/`,
				component: resolve(`~/pages/${route.model}/index.vue`),
			});
		}
	});
	console.log("sitemapCoachingItems", sitemapCoachingItems);
	sitemapCoachingItems.forEach((route) => {
		sitemapRoutes.push({
			path: `/coaching/${route.slug}/`,
			component: resolve(`~/pages/CoachingPage/_slug.vue`),
			name: route.slug,
		});
	});
	return [...routes, ...sitemapRoutes];
}

export async function generate() {
	const sitemaps = await siteStructure();

	const sitemap: ISitemapRoute[] = sitemaps.mainSitemap;
	const routes: any = [];
	sitemap.forEach((item: any) => {
		routes.push({
			route: `/${item.slug}/`,
		});

		// if (item.model === "ContactPage") {
		// 	routes.push({
		// 		route: "/" + item.slug + "/",
		// 	});
		// } else if (item.model === "ContentPage") {
		// 	routes.push({
		// 		route: "/" + item.slug + "/",
		// 	});
		// }
	});
	return routes;
}
