type Props = {params: {handle: string}};

export default function CollectionPage({params}: Props) {
  return <main>Collection route (Next.js dynamic equivalent): {params.handle}</main>;
}
