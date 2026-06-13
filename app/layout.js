import './globals.css';

export const metadata = {
  title: 'Eastwood City Condo For Sale | Best Buy Properties',
  description: '1-bedroom 36 SQM condominium for sale at Excelsior Tower 2, Eastwood City, Quezon City. Semi-furnished, clean title, ready for occupancy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
