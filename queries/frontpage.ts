import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";

const query = `query($isPreview: Boolean!) {
    frontpage(id: "5VyBhlOzhQsJndF2GyhZ5i", preview:$isPreview) {
      ${pageHeader}
      ${contentAreaCollection}
      ${seo}
    }
  }
  `;
  export { query };
  