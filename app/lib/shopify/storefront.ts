import {GraphQLClient} from 'graphql-request';
import {HOMEPAGE_METAOBJECT_QUERY} from '../../graphql/queries/homepage';

const endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

const storefrontClient = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_PUBLIC_TOKEN ?? '',
    'Content-Type': 'application/json',
  },
});

export async function fetchHomepageProducts() {
  try {
    const data = await storefrontClient.request<{products: {nodes: {id: string; title: string}[]}}>(
      HOMEPAGE_METAOBJECT_QUERY,
      {country: 'US', language: 'EN'},
    );
    return data.products.nodes;
  } catch {
    return [];
  }
}

export async function getCartLines() {
  return [] as {id: string; title: string; quantity: number}[];
}

export async function getCartSummary() {
  return {subtotal: '$0.00', checkoutUrl: 'https://checkout.shopify.com'};
}
