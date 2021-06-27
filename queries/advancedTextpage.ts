import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";
const query = `query getAdvancedTextpages($slug: String!, $isPreview: Boolean!)  {
  pageData: advancedTextPageCollection(where: {slug: $slug}, limit: 1, preview:$isPreview) {
    items {
    showCollaborators
  ${pageHeader}
  coachingProcessTitle
  coachingProcessCollection(limit: 15) {
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
  secondCoachingProcessTitle
  secondCoachingProcessCollection(limit: 15) {
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
export { query };
