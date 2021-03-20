const pageQuery = `query {
  lecturePage(id: "1dGD6zAHlx7Kff4SnXcuJX") {
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
