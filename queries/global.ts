const globalQuery = `query($isPreview: Boolean!) {
  globalSettings(id: "38onI8GbhsFteNr1exH4HG", preview:$isPreview) {
    logo {
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
}
  `;
export { globalQuery };
