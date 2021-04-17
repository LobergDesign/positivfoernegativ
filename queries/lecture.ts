import { contentAreaCollection,pageHeader,seo} from "./queriesUtils/utils";

const pageQuery = `query {
  lecturePage(id: "1dGD6zAHlx7Kff4SnXcuJX") {
    ${pageHeader}
    ${contentAreaCollection}
    ${seo}
  }
}
`;
export { pageQuery };
