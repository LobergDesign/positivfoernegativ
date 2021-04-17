import { seo } from "./queriesUtils/utils";

const query = `query {
  contactPage(id: "4FaZD4NezcKvSWPrRsMJPp") {
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
