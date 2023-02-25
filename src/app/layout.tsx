import './globals.css';

export const metadata = {
  title: 'Quotes to Live By',
  description: 'A simple app to get you through the day',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
