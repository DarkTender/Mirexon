import { useEffect, useState } from 'react';

export default function CreditDisplay({ email }) {
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    if (!email) return;
    fetch(`/api/user/credits?email=${email}`)
      .then(res => res.json())
      .then(data => setCredits(data.credits));
  }, [email]);

  if (!email) return null;

  return (
    <div className="text-cyan-300 text-sm mt-4">
      Máš {credits ?? "..."} kreditov
    </div>
  );
}
