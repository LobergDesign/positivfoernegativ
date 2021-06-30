const query = `{
    simpleTextPageCollection(limit: 25) {
      items {
        model: __typename
        slug
        linkName
        isCoachingSubpage
      }
    }
    advancedTextPageCollection(limit: 25) {
      items {
        model: __typename
        slug
        linkName
      }
    }
    contactPage(id: "4FaZD4NezcKvSWPrRsMJPp") {
      model: __typename
      slug
      linkName
    }
  
}
  `;
export { query };
