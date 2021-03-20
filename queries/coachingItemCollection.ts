const query = `query {
  coachingItemCollection {
    items {
      title
      bodytext{json}
      slug
    }
  }
}
`;
export { query };
