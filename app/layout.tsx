import './globals.css'
import localFont from 'next/font/local'
import { Providers } from './providers'
import Navbar from './navbar/Navbar'
import Modal from './components/LoginModal'
import Footer from './Footer/Footer'

const iranYekan = localFont({
  src: [
    {
      path: '../public/fonts/IranYekanLight.ttf',
      weight: '200'
    },
    {
      path: '../public/fonts/IranYekanRegular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/IranYekanMedium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/IranYekanBold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/IranYekanExtraBold.ttf',
      weight: '800'
    }
  ]
})

export const metadata = {
  title: 'پیشه | کاریابی و هدایت شغلی',
  description: 'پیشه یک وبسایت کاریابی و هدایت شغلی است'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fa' dir='rtl'>
      <body className={iranYekan.className}>
        <Providers>
          <Navbar />
          <Modal />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
