'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

const colors = {
  primary: {
    500: '#2B5ADC',
    600: '#2B5ADC',
    700: '#092166'
  }
}

export const theme = extendTheme({ colors })

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
