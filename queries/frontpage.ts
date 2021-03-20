const query = `query {
    frontpage(id: "5VyBhlOzhQsJndF2GyhZ5i") {
      subtitle
      pageHeadline {
        json
      }
      image {
        title
        description
        url
      }
      bodytext {
        json
      }
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
        }
      }
    }
  }
  `;
  export { query };
  