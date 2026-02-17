import {useParams} from '@remix-run/react';

export default function ProductRoute() {
  const {handle} = useParams();
  return <main>Product: {handle}</main>;
}
