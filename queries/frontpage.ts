import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";

const query = `query($isPreview: Boolean!) {
    frontpage(id: "5VyBhlOzhQsJndF2GyhZ5i", preview:$isPreview) {
      showCollaborators
      slider {
        sliderItemsCollection(limit: 12) {
          items {
            model: __typename
            ... on SimpleTextPage {
              pageHeadline {
                json
              }
              slug
              bodytext {
                json
              }
              image {
                url
                title
              }
              previewImage {
                url
                title
              }
              previewTeaser
            }
            ... on AdvancedTextPage {
              pageHeadline {
                json
              }
              slug
              bodytext {
                json
              }
              image {
                url
                title
              }
              previewImage {
                url
                title
              }
              previewTeaser
            }
          }
        }
      }
      ${pageHeader}
      ${contentAreaCollection}
      ${seo}
    }
  }
  `;
export { query };
