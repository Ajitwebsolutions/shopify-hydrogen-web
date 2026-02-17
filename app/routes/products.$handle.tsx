type Props = {params: {handle: string}};

export default function ProductPage({params}: Props) {
  return <main>Product route (Next.js dynamic equivalent): {params.handle}</main>;
}
