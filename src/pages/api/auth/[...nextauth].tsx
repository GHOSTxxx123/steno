import NextAuth from "next-auth/next";
import  { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { urlinback } from "@/API/urlinback";
import { Login } from "@/API/login/login";



const authOptions: NextAuthOptions  = {
  session: {
    strategy: "jwt"
  }  ,
  providers: [
      CredentialsProvider({
        name: "Credentials",
  
        async authorize(credentials, req) {

              const user = await Login(credentials?.username, credentials?.password);  
              
              // const user.add(credentials?.password);

              

              if (user.detail) {
                  throw new Error(user.detail);
              }
              else if (user.access_token) {
            
                return user
              }
              else {
                return null; 
              }
  
  },
        credentials: {
          username: { label: "username", type: "text", placeholder: "Username"},
          password: { label: "Password", type: "password" },
        },

      
      }),
    ],

    callbacks: {
      async jwt({token, user}) {
        return { ...token, ...user }
      },

      async session({session, token, user}) {
        session.user = token as any;
        return session
      },
    },
    secret: "ery-secret`",
    // nextauth_url : "",
    // nextauth_url : "",
    

    pages: {
      signIn: "/sign/SignIn",
      error: "/register/login",
      signOut: "/register/login"
    },
  }


export default NextAuth(authOptions);
