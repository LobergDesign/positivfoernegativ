import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";
const query = `query getSimpleTextpages($slug: String!, $isPreview: Boolean!)  {
  pageData: simpleTextPageCollection(where: {slug: $slug}, limit: 1, preview:$isPreview) {
    items {
    showCollaborators
    isCoachingSubpage
  ${pageHeader}
  ${contentAreaCollection}
  ${seo}
  }
}
}
`;
export { query };
