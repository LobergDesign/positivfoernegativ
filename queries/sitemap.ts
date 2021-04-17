const query = `query {
  globalSettings(id: "38onI8GbhsFteNr1exH4HG") {
      mainMenuCollection {
        items {
          model:__typename
          ... on CoachingEntranceItem {
            slug
            linkName
          }
          ... on ContactPage {
            slug
            linkName
          }
          ... on CoachingPage {
            slug
            linkName
          }
          ... on LecturePage {
            slug
            linkName
          }
          ... on ContentPage {
            slug
            linkName
          }
        }
      }
  }
   coachingItemCollection {
    items {
      model:__typename
      slug
      linkName
    }
  }
}
  `;
export { query };
