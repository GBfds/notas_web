import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({

  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  secret: process.env.JWT_SECRET

})





/*import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.JWT_SECRET
  
}

export default NextAuth(authOptions)*/