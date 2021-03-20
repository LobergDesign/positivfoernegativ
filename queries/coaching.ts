const pageQuery = `query {
  coachingPage(id: "5ccPwnXpMsxcD0RIk1Azq9") {
    pageHeadline{json}
    subtitle
    image {
      title
      description
      url
    }
    bodytext{
      json
    }
  }
}
`;
export { pageQuery };
