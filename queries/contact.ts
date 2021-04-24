import { seo } from "./queriesUtils/utils";

const query = `query($isPreview: Boolean!) {
  contactPage(id: "4FaZD4NezcKvSWPrRsMJPp", preview:$isPreview) {
    pageHeadline{json}
    subtitle
    bodytext{
      json
    }
    ${seo}
  }
}
`;
export { query };
