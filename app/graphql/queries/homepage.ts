export const HOMEPAGE_METAOBJECT_QUERY = `#graphql
  query Homepage {
    metaobject(handle: {type: "homepage", handle: "main"}) {
      fields {
        key
        value
      }
    }
  }
`;
