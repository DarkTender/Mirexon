
import { getToken } from "next-auth/jwt";
import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) return res.status(401).json({ message: "Neprihlásený" });

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  const user = await db.collection("users").findOne({ _id: new ObjectId(token.sub) });
  if (!user) return res.status(404).json({ message: "Používateľ neexistuje" });

  return res.status(200).json({ credits: user.credits || 0 });
}
