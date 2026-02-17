import {useParams} from '@remix-run/react';

export default function CollectionRoute() {
  const {handle} = useParams();
  return <main>Collection: {handle}</main>;
}
