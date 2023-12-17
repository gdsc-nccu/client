import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { adminAuth, adminFirestore } from "../../../../utils/firebase";


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET as string,
    }),
  ],
  adapter: FirestoreAdapter(adminFirestore),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(params) {
      if (params.user) {
        try {
          await adminAuth.getUserByEmail(params.user.email as string);
        } catch (error) {
          await adminAuth.createUser({
            uid: params.account?.userId,
            email: params.user.email as string,
            emailVerified: true,
          });
        }
        return true;
      }
      return false;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
