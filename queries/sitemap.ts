const query = `query($isPreview: Boolean!) {
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
        }
      }
    }
  }
  coachingItemCollection {
    items {
      model: __typename
      slug
      linkName
    }
  }
}
  `;
export { query };
