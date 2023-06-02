'use client'

import { QueryClient, QueryClientProvider } from 'react-query'

const quertClient = new QueryClient()

export default function ReactQueryProvider({
  children
}: {
  children: React.ReactNode
}) {
  return <QueryClientProvider client={quertClient}>{children}</QueryClientProvider>
}
