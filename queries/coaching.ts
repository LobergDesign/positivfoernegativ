import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";
const query = `query($isPreview: Boolean!)  {
  coachingPage(id: "5ccPwnXpMsxcD0RIk1Azq9", preview:$isPreview) {
  ${pageHeader}
  ${contentAreaCollection}
  ${seo}
  }
}
`;
export { query };
