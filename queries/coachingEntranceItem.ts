import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";
const getDynamicData = `
query getCoachingEntrance($slug: String!) {
  pageData: coachingEntranceItemCollection(where: {slug: $slug}, limit: 1) {
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
