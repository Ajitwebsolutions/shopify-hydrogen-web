import {Link} from '@remix-run/react';
import {SectionRenderer} from '~/components/sections/SectionRenderer';

const homepageSections = [
  {type: 'hero', heading: 'Modern storefront performance'},
  {type: 'featuredCollection', heading: 'Summer essentials'},
  {type: 'testimonial', heading: 'Loved by fast-moving teams'},
];

export default function Index() {
  return (
    <section>
      <h1>Hydrogen Enterprise Starter</h1>
      <p className="lead">
        Production-focused storefront scaffolding with CI, cart architecture, and section-driven rendering.
      </p>

      <div className="quick-links">
        <Link to="/collections/summer-essentials">Browse collection</Link>
        <Link to="/products/classic-tee">View product</Link>
        <Link to="/search?q=tee">Run search</Link>
      </div>

      <div className="panel">
        <h2>Homepage Sections</h2>
        <SectionRenderer sections={homepageSections} />
      </div>
    </section>
  );
}
