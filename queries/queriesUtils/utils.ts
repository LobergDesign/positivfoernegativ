const contentAreaCollection = ` 
contentAreaCollection(limit: 30) {
    items {
      __typename
      ... on LayoutCoachingBlok {
        sectionTitle
        title
        subtitle
        link {
          ... on CoachingPage {
            slug
          }
          ... on ContactPage {
            slug
          }
          ... on LecturePage{
            slug
          }
          ... on ContentPage{
            slug
          }
        }
        listItemsCollection(limit: 16) {
          items {
            model: __typename
            ... on CoachingEntranceItem {
              title
              pageHeadline {
                json
              }
              bodytext {
                json
              }
              slug
            }
            ... on CoachingItem {
              title
              pageHeadline {
                json
              }
              bodytext {
                json
              }
              slug
            }
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
