const contentAreaCollection = ` 
contentAreaCollection(limit: 30) {
    items {
      __typename
      ... on LayoutCoachingBlok {
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
    }
  }
  `;
const seo = `
seoSection {
    metaTitle
    metaDescription
    metaOgtitle
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
