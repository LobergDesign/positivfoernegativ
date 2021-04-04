const query = `query {
  globalSettings(id: "38onI8GbhsFteNr1exH4HG") {
      mainMenuCollection {
        items {
          model:__typename
          ... on CoachingEntranceItem {
            slug
          }
          ... on ContactPage {
            slug
          }
          ... on CoachingPage {
            slug
          }
          ... on LecturePage {
            slug
          }
          ... on ContentPage {
            slug
          }
        }
      }
  }
   coachingItemCollection {
    items {
      model:__typename
      slug
    }
  }
}
  `;
export { query };
