import { getCredits } from "../../lib/user";

export default async function handler(req, res) {
  const email = req.query.email;
  const credits = await getCredits(email);
  res.status(200).json({ credits });
}
