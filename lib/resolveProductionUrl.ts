const localUrl = `http://localhost:3000`;
const remoteUrl = `${process.env.BASE_URL!}`;
const baseUrl =
  window?.location?.hostname === 'localhost' ? localUrl : remoteUrl;

export function resolveProductionUrl(doc: any) {
  // Fallback and check the store object if slug isn't available on the doc
  const slug = doc?.slug?.current
    ? doc?.slug?.current
    : doc?.store?.slug?.current;

  if (!slug) {
    throw new Error(`Document has no slug, cannot preview`);
  }

  const url = new URL(baseUrl);

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
