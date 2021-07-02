import { contentAreaCollection,pageHeader,seo} from "./queriesUtils/utils";

const pageQuery = `query($isPreview: Boolean!) {
  lecturePage(id: "1dGD6zAHlx7Kff4SnXcuJX", preview:$isPreview) {
    showCollaborators
    ${pageHeader}
    ${contentAreaCollection}
    ${seo}
  }
}
`;
export { pageQuery };
