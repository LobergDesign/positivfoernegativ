const globalQuery = `query($isPreview: Boolean!) {
  globalSettings(id: "38onI8GbhsFteNr1exH4HG", preview:$isPreview) {
    logo {
      title
      url
    }
    cv {
      title
      url
    }
    empowerMindText
    empowerMind {
      title,
      description,
      url
    }
    phonenumber,
    email,
    adresse,
    zipcodeAndCity,
    footerText{json},
    facebook,
    linkedIn,
    youTube,
    instagram
  }
  globalSettingsCollection(limit: 1) {
    items {
      footerLinksCollection(limit: 10) {
        items {
          ... on ContactPage {
            linkName
            slug
          }
             ... on ContentPage{
            linkName
            slug
          }
        }
      }
    }
  }
}
  `;
export { globalQuery };
