
import Head from 'next/head';

export default function Intelli() {
  const products = [
    { name: "MINDCORE AI", desc: "Neurónový engine pre pokročilé rozhodovanie a autonómiu", status: "ALPHA" },
    { name: "SYNTHVOICE", desc: "Real-time AI hlas so schopnosťou emócií", status: "BETA" },
    { name: "VISIONARY", desc: "Počítačové videnie s neurónovým mapovaním prostredia", status: "COMING SOON" },
    { name: "LOGIX AI", desc: "Analytický modul pre dátové predikcie a stratégie", status: "LIVE" },
  ];

  return (
    <>
      <Head>
        <title>MIREXON™ – INTELLI</title>
      </Head>
      <main className="min-h-screen px-4 py-12 text-white bg-black">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 text-center mb-12 tracking-widest">INTELLI</h1>
        <p className="text-center max-w-3xl mx-auto text-gray-400 mb-10">Produkty umelej inteligencie navrhnuté pre reálnu transformáciu budúcnosti.</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((p, i) => (
            <div key={i} className="bg-black/50 border border-cyan-800 rounded-xl p-6 shadow hover:shadow-cyan-700 transition">
              <h2 className="text-2xl text-cyan-300 font-semibold">{p.name}</h2>
              <p className="text-gray-400 mt-2">{p.desc}</p>
              <span className="inline-block mt-4 px-3 py-1 rounded-full text-sm font-semibold bg-cyan-700/20 text-cyan-300">{p.status}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="/" className="text-cyan-500 hover:underline">← Späť na hlavnú stránku</a>
        </div>
      </main>
    </>
  );
}
