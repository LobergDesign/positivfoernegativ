import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";
const getDynamicData = `
query getCoachingEntrance($slug: String!, $isPreview: Boolean!) {
  pageData: coachingEntranceItemCollection(where: {slug: $slug}, limit: 1, preview:$isPreview) {
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
