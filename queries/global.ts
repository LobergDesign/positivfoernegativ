const globalQuery = `query($isPreview: Boolean!) {
  globalSettings(id: "38onI8GbhsFteNr1exH4HG", preview:$isPreview) {
    mainMenuCollection {
      items {
        model: __typename
        ... on ContactPage {
          slug
          linkName
        }
        ... on AdvancedTextPage {
          slug
          linkName
          
        }
        ... on SimpleTextPage {
          slug
          linkName
          isCoachingSubpage
        }
      }
    }
    logo {
      title
      url
    }
    cv {
      title
      url
    }
    phonenumber
    email
    adresse
    zipcodeAndCity
    footerText {
      json
    }
    facebook
    linkedIn
    youTube
    instagram
    footerLinksCollection(limit: 4) {
      items {
        ... on SimpleTextPage {
          linkName
          slug
        }
      }
    }
  }
}
  `;
export { globalQuery };