'use client';

import { usePreview } from '../lib/sanity.preview';
import ResourcePage from './ResourcePage';

type Props = {
  query: string;
};

export default function PreviewResourcePage({ query }: Props) {
  const post = usePreview(null, query);
  return post && <ResourcePage post={post} />;
}
