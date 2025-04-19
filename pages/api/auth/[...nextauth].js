
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
import { compare } from "bcryptjs";

let client;
async function connectToDatabase() {
  if (!client) {
    client = await MongoClient.connect(process.env.MONGODB_URI);
  }
  return client.db();
}

export default NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const db = await connectToDatabase();
        const user = await db.collection("users").findOne({ email: credentials.email });

        if (!user) throw new Error("E-mail neexistuje");
        const isValid = await compare(credentials.password, user.password);
        if (!isValid) throw new Error("Nesprávne heslo");

        return { id: user._id, email: user.email };
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
});
