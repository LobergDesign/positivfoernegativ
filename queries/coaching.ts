import { contentAreaCollection, pageHeader, seo } from "./queriesUtils/utils";
const query = `query {
  coachingPage(id: "5ccPwnXpMsxcD0RIk1Azq9") {
  ${pageHeader}
  ${contentAreaCollection}
  ${seo}
  }
}
`;
export { query };
