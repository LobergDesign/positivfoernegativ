import { contentAreaCollection,pageHeader,seo } from "./queriesUtils/utils";

const getDynamicData = `
  query getContentPage($slug: String, $isPreview: Boolean!){
    pageData: contentPageCollection(where: { slug: $slug }, limit:1, preview:$isPreview) {
      items {
        ${pageHeader}
       ${contentAreaCollection}
       ${seo}
      }
    }
  }
  `;
  export { getDynamicData };
