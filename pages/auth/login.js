import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.ok) {
      router.push("/dashboard"); // môžeš zmeniť na kam chceš presmerovať
    } else {
      setError("Neplatný e-mail alebo heslo");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 p-8 rounded-xl shadow-md w-80 space-y-4"
      >
        <h1 className="text-xl font-bold text-center">Prihlásenie do MIREXON™</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-neutral-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Heslo"
          className="w-full px-4 py-2 rounded bg-neutral-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
          Prihlásiť sa
        </button>
      </form>
    </div>
  );
}
