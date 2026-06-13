import './globals.css'

export const metadata = {
  title: 'Eastwood City Condo For Sale | Best Buy Properties',
  description: '1BR 36 SQM semi-furnished condominium for sale at Excelsior Tower 2, Eastwood City, Quezon City. Clean title, ready for occupancy, ₱3,000,000.',
  openGraph: {
    title: 'Eastwood City Condo For Sale',
    description: '36 SQM • 1 Bedroom • 17th Floor • Semi-Furnished • Clean Title • ₱3,000,000',
    type: 'website'
  }
}

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>
}
