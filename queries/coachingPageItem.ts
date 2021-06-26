import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";
const getDynamicData = `
query getCoachingPage($slug: String!,$isPreview: Boolean!) {
  pageData: coachingItemCollection(where: {slug: $slug}, limit: 1, preview:$isPreview) {
    items {
      showCollaborators
      ${pageHeader}
      ${contentAreaCollection}
      ${seo}
    }
  }
}
  `;

export { getDynamicData };
