export function resolveProductionUrl(doc: any) {
  // Fallback and check the store object if slug isn't available on the doc
  const slug = doc?.slug?.current
    ? doc?.slug?.current
    : doc?.store?.slug?.current;

  if (!slug) {
    throw new Error(`Document has no slug, cannot preview`);
  }

  const url = new URL(process.env.BASE_URL!);

  switch (doc._type) {
    case 'home':
      url.pathname = `/`;
      break;

    case 'post':
      url.pathname = `resources/${slug}`;
      break;

    default:
      url.pathname = slug;
      break;
  }

  url.searchParams.set(`preview`, `true`);

  return url.toString();
}
