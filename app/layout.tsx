import Header from './Header'
import '../styles/globals.css'
import Provider from './Provider'

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
      <Provider>
        <body className='body dark:bg-[#12151C] transition-all duration-700'>
          <Header />
          <div className='max-w-6xl mx-auto '>
            {children}
          </div>
      </body>
      </Provider>
      
    </html>
  )
}
