import clientPromise from "../../../lib/mongodb";
import { hash } from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Iba POST metóda je povolená." });
  }

  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email a heslo sú povinné." });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Používateľ s týmto e-mailom už existuje." });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = {
      name,
      email,
      hashedPassword,
      credits: 100, // default štartovný kredit (môžeš zmeniť)
      createdAt: new Date(),
    };

    await db.collection("users").insertOne(newUser);

    return res.status(201).json({ message: "Registrácia prebehla úspešne." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Niečo sa pokazilo na serveri." });
  }
}
