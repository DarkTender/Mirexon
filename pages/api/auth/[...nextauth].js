import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = { email: credentials.email, password: credentials.password }; // Tu pridať kontrolu v DB
        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt" // Uchovávanie session v JWT
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id; // Môžeš pridať ďalšie informácie, ako kredit
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Uloženie ID používateľa
      }
      return token;
    }
  }
});
