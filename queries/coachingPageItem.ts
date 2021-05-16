import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";
const getDynamicData = `
query getCoachingPage($slug: String!,$isPreview: Boolean!) {
  pageData: coachingItemCollection(where: {slug: $slug}, limit: 1, preview:$isPreview) {
    items {
      ${pageHeader}
      coachingProcessTitle {
        json
      }
      coachingProcessCollection(limit: 30) {
        items {
          headline
          bodytext {
            json
          }
          image {
            title
            description
            url
          }
        }
      }
      ${contentAreaCollection}
      ${seo}
    }
  }
}
  `;

export { getDynamicData };
