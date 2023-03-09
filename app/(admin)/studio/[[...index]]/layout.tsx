import { AnalyticsWrapper } from '../../../../components/analytics/analytics';

import '../../../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
