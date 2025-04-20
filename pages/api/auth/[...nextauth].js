import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import clientPromise from "../../../lib/mongodb"; // cesta podľa tvojej štruktúry

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) return null;

        const client = await clientPromise;
        const db = client.db();
        const user = await db.collection("users").findOne({ email: credentials.email });

        if (!user) return null;

        const isValid = await compare(credentials.password, user.hashedPassword);
        if (!isValid) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          credits: user.credits || 0, // môžeš to neskôr použiť v dashboarde
        };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.credits = token.credits; // napr. na zobrazenie kreditov
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.credits = user.credits || 0;
      }
      return token;
    }
  },
  pages: {
    signIn: "/auth/login"
  },
  secret: process.env.NEXTAUTH_SECRET
});
