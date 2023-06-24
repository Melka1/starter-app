import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
export const authOptions = {
  // Configure one or more authentication providers
  
  providers: [
    GoogleProvider({
      clientId: '1054508574859-tibafsor8ao5c242n5r889l5fgbnqlt5.apps.googleusercontent.com',
      clientSecret: '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',
      
    }),
  ],
  
  // pages:{
  //   login:'/login'
  // }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}