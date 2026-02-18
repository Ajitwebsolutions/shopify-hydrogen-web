import {createRequestHandler} from '@shopify/remix-oxygen';
import * as remixBuild from 'virtual:remix/server-build';

export default {
  fetch: createRequestHandler({
    build: remixBuild,
    mode: process.env.NODE_ENV,
  }),
};
