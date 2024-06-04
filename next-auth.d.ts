import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            access_token: string,
            access_token_expires_in: 0,
            refresh_token: string,
            refresh_token_expires_in: 0
        };
    }
}