'use client'

import ReduxProvider from './ReduxProvider'
import QueryProvider from './QueryProvider'
import { SessionProvider } from 'next-auth/react'
import { ChakraProviders } from './ChakraProviders'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <SessionProvider>
        <QueryProvider>
          <ChakraProviders>{children}</ChakraProviders>
        </QueryProvider>
      </SessionProvider>
    </ReduxProvider>
  )
}

export default Providers
