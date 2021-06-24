import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";
const getDynamicData = `
query getCoachingEntrance($slug: String!, $isPreview: Boolean!) {
  pageData: coachingEntranceItemCollection(where: {slug: $slug}, limit: 1, preview:$isPreview) {
    items {
      showCollaborators
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
