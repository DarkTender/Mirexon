 // lib/user.js
import clientPromise from "./mongo";
import { ObjectId } from "mongodb";

export async function getUserByEmail(email) {
  const client = await clientPromise;
  const db = client.db("mirexon");
  return await db.collection("users").findOne({ email });
}

export async function decrementCredit(email) {
  const client = await clientPromise;
  const db = client.db("mirexon");
  const user = await db.collection("users").findOne({ email });
  if (!user || user.credits <= 0) return false;
  
  await db.collection("users").updateOne(
    { email },
    { $inc: { credits: -1 } }
  );
  return true;
}

export async function getCredits(email) {
  const client = await clientPromise;
  const db = client.db("mirexon");
  const user = await db.collection("users").findOne({ email });
  return user?.credits || 0;
}

