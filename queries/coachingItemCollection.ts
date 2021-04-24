const query = `query($isPreview: Boolean!) {
  coachingItemCollection(preview:$isPreview) {
    items {
      title
      bodytext{json}
      slug
    }
  }
}
`;
export { query };
