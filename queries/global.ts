const globalQuery = `query {
  globalSettings(id: "38onI8GbhsFteNr1exH4HG") {
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
