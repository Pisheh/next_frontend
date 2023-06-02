import localFont from 'next/font/local'
import { ChakraProviders } from './providers/ChakraProviders'
import Navbar from './navbar/Navbar'
import Footer from './Footer/Footer'
import './globals.css'
import ReduxProvider from './providers/ReduxProvider'

const iranYekan = localFont({
  src: [
    {
      path: '../public/fonts/IRANYekanX-Light.woff',
      weight: '200'
    },
    {
      path: '../public/fonts/IRANYekanX-Regular.woff',
      weight: '400'
    },
    {
      path: '../public/fonts/IRANYekanX-Medium.woff',
      weight: '500'
    },
    {
      path: '../public/fonts/IRANYekanX-DemiBold.woff',
      weight: '600'
    },
    {
      path: '../public/fonts/IRANYekanX-Bold.woff',
      weight: '700'
    },
    {
      path: '../public/fonts/IRANYekanX-ExtraBold.woff',
      weight: '800'
    },
    {
      path: '../public/fonts/IRANYekanX-Black.woff',
      weight: '900'
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
      <body className={`${iranYekan.className} bg-[#fcfcfc]`}>
        <ReduxProvider>
          <ChakraProviders>
            <Navbar />
            {children}
            <Footer />
          </ChakraProviders>
        </ReduxProvider>
      </body>
    </html>
  )
}
