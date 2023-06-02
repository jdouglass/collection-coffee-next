import { AnalyticsWrapper } from '../../components/analytics/analytics';
import Header from '../../components/navigation/header/Header';

import '../globals.css';

export const metadata = {
  title: 'Collection Coffee',
  description: 'Discover coffee beans from around the world, all in one place!',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
