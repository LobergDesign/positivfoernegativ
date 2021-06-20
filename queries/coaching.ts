import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";
const query = `query($isPreview: Boolean!)  {
  coachingPage(id: "5ccPwnXpMsxcD0RIk1Azq9", preview:$isPreview) {
  ${pageHeader}
  coachingProcessTitle
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
`;
export { query };
