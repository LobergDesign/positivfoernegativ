import { contentAreaCollection,pageHeader,seo } from "./queriesUtils/utils";

const getDynamicData = `
  query getContentPage($slug: String){
    pageData: contentPageCollection(where: { slug: $slug }, limit:1) {
      items {
        ${pageHeader}
       ${contentAreaCollection}
       ${seo}
      }
    }
  }
  `;
  export { getDynamicData };
