import {PassThrough} from 'node:stream';
import {renderToPipeableStream} from 'react-dom/server';
import {RemixServer} from '@remix-run/react';
import type {EntryContext} from '@shopify/remix-oxygen';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  return new Promise<Response>((resolve, reject) => {
    let didError = false;

    const {pipe, abort} = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onShellReady() {
          const body = new PassThrough();
          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(body as unknown as BodyInit, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders,
            }),
          );
          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          didError = true;
          console.error(error);
        },
      },
    );

    setTimeout(abort, 5_000);
  });
}
