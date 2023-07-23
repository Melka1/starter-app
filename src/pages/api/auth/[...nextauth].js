import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
export const authOptions = {
  
  providers: [
    GoogleProvider({
      clientId: '1054508574859-tibafsor8ao5c242n5r889l5fgbnqlt5.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    Credentials({
      
      name:'Credentials',
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        
        const res = await fetch("http://localhost:3000/api/user", {
          method: 'POST',
          body: JSON.stringify({
            email:credentials.email,
            password:credentials.password
          }),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
  
        if (res.ok && user) {
          return user
        }

        return null
      }
    })
  ],
  pages:{
    signIn:'/auth/signin'
  }
  
}

export default NextAuth(authOptions)