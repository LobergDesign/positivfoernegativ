import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";

const query = `query($isPreview: Boolean!) {
    frontpage(id: "5VyBhlOzhQsJndF2GyhZ5i", preview:$isPreview) {
      slider {
        sliderItemsCollection(limit: 6) {
          items {
            model: __typename
            ... on CoachingItem {
              pageHeadline {
                json
              }
              slug
              bodytext {
                json
              }
            }
            ... on CoachingPage {
              pageHeadline {
                json
              }
              slug
              bodytext {
                json
              }
            }
            ... on ContactPage {
              pageHeadline {
                json
              }
              slug
              bodytext {
                json
              }
            }
            __typename
            ... on LecturePage {
              pageHeadline {
                json
              }
              slug
              bodytext {
                json
              }
            }
            ... on CoachingEntranceItem {
              pageHeadline {
                json
              }
              slug
              bodytext {
                json
              }
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
  