const query = `query {
  coachingPage(id: "5ccPwnXpMsxcD0RIk1Azq9") {
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
    contentAreaCollection(limit: 30) {
      items {
        __typename
        ... on LayoutCoachingBlok {
          title
          subtitle
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
  }
}
`;
export { query };
