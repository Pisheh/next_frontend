import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const GOOGLE_CLIENT_ID: any = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET: any = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET
    })
  ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
