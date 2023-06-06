import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>AuthProvider</SessionProvider>
}

export default AuthProvider
