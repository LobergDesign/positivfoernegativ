const query = `query($isPreview: Boolean!) {
  coachingItemCollection(preview:$isPreview) {
    items {
      showCollaborators
      title
      bodytext{json}
      slug
    }
  }
}
`;
export { query };
