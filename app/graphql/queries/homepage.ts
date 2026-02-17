export const HOMEPAGE_METAOBJECT_QUERY = `#graphql
  query HomePageProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: 8, sortKey: BEST_SELLING) {
      nodes {
        id
        handle
        title
      }
    }
  }
`;
