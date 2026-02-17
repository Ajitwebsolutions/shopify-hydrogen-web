export type HomepageSection = {
  type: 'hero' | 'featuredCollection' | 'testimonial' | 'richText' | string;
  heading?: string;
  handle?: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
};
