import '../styles/globals.css'

export const metadata = {
  title: 'Ving News',
  description: 'We bring you the latest new across different categories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
