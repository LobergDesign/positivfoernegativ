export function head(seoObject: NGlobal.ISeo) {
	const type = seoObject?.metaOgtype ? seoObject?.metaOgtype : "website";

	return {
		title: seoObject?.metaTitle,
		htmlAttrs: {
			lang: "da-DK",
		},
		meta: [
			{
				hid: "description",
				name: "description",
				content: seoObject?.metaDescription,
			},
			{
				hid: "og:description",
				name: "og:description",
				property: "og:description",
				content: seoObject?.metaOgdescription,
			},
			{
				hid: "og:title",
				name: "og:title",
				property: "og:title",
				content: seoObject?.metaOgtitle,
			},
			{
				hid: "og:type",
				content: type,
			},
			{
				property: "og:image",
				content: seoObject?.metaOgImage?.url,
			},
		],
	};
}
