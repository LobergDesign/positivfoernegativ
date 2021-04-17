import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";

const query = `query {
    frontpage(id: "5VyBhlOzhQsJndF2GyhZ5i") {
      ${pageHeader}
      ${contentAreaCollection}
      ${seo}
    }
  }
  `;
  export { query };
  