const contentAreaCollection = ` 
contentAreaCollection(limit: 30) {
    items {
      __typename
      ... on LayoutCoachingBlok {
        sectionTitle
        title
        subtitle
        listItemsCollection(limit: 15) {
          items {
            ... on AdvancedTextPage {
              title
              slug
              bodytext {
                json
              }
            }
            ... on SimpleTextPage {
              title
              slug
              isCoachingSubpage
              bodytext {
                json
              }
            }
          }
        }
        link {
          ... on AdvancedTextPage {
            slug
          }
          ... on SimpleTextPage {
            slug
            isCoachingSubpage
          }
        }
      }
      ... on LayoutImageArea {
        imagesCollection(limit: 10) {
          items {
            title
            description
            url
          }
        }
        fullscreen
      }
      ... on TextAndImageArea {
        label
        bodytext {
          json
        }
        image {
          title
          description
          url
        }
      }
      ... on LayoutTextArea {
        title
        bodytext {
          json
        }
      } 
      ... on LayoutVideo {
        image {
          title
          description
          url
        }
        youTubeId
        videoCaption{json}
      }
      ... on LayoutRecommendations {
        title
        recommendationsCollection(limit: 15) {
          items {
            recommendationsBodytext{json}
            recommendationsName
            recommendationsFrom
          }
        }
      }
    }
  }
  `;
const seo = `
seoSection {
    metaTitle
    metaDescription
    metaOgtitle
    metaOgdescription
    metaOgtype
    metaOgurl
    metaOgimage {
      title
      url
    }
  }
  `;
const pageHeader = `pageHeadline {
    json
  }
  subtitle
  bodytext {
    json
  }
  image {
    title
    description
    url
  }
  `;
export { seo, contentAreaCollection, pageHeader };
