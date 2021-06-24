const query = `query($isPreview: Boolean!)  {
  globalDataCollaboratorsCollection(limit:15, preview:$isPreview) {
    total
    items {
      title
      image {
        fileName
        url
      }
      link
    }
  }
}
`;
export { query };
