'use client'

import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
export default QueryProvider
