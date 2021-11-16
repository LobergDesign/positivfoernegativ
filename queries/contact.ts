import { seo, pageHeader } from "./queriesUtils/utils";

const query = `query($isPreview: Boolean!) {
  contactPage(id: "4FaZD4NezcKvSWPrRsMJPp", preview:$isPreview) {
    ${pageHeader}
    bodytext{
      json
    }
    competenceSection {
      json
    }
    pricesInformation {
      json
    }
    ${seo}
  }
  globalSettings(id: "38onI8GbhsFteNr1exH4HG", preview:$isPreview) {
    cv {
      title
      url
    }
    phonenumber
    email
    adresse
    zipcodeAndCity
    facebook
    linkedIn
    youTube
    instagram
  }
}
`;
export { query };
