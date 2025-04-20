import { getSession } from "next-auth/react";

export default function Dashboard({ user }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Vitaj späť, {user.name || user.email} 👋</h1>
      <div className="bg-neutral-900 p-6 rounded-xl w-full max-w-md shadow-md space-y-4">
        <div>
          <span className="font-semibold">Email:</span> {user.email}
        </div>
        <div>
          <span className="font-semibold">Počet kreditov:</span> {user.credits ?? "Neznáme"}
        </div>
        <div className="pt-4">
          <a
            href="/api/auth/signout"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Odhlásiť sa
          </a>
        </div>
      </div>
    </div>
  );
}

// Tento kód zabezpečí ochranu dashboardu
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}
