const getDynamicData = `
  query getContentPage($slug: String){
    pageData: contentPageCollection(where: { slug: $slug }, limit:1) {
      items {
        pageHeadline {
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
        contentAreaCollection {
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
              imagesCollection {
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
          }
        }
        seoSection{
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
      }
    }
  }
  `;
  export { getDynamicData };
