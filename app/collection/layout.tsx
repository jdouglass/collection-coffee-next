'use client';

import FilterBar from '../../components/utility/filter-bar/FilterBar';

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-screen-2xl mx-auto flex">
      <FilterBar />
      <section>{children}</section>
    </section>
  );
}
