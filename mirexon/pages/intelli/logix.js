
import Head from 'next/head';

export default function Logix() {
  return (
    <>
      <Head>
        <title>LOGIX AI | MIREXON™</title>
      </Head>
      <main className="min-h-screen px-6 py-20 text-white bg-black text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-8">LOGIX AI</h1>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg mb-12">Dátová analytika a predikcia budúcnosti. Ideálny pre stratégie, firmy aj kreatívne rozhodovanie.</p>
        <a href="/intelli/logix/demo" className="inline-block mt-4 px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">
          Spustiť demo
        </a>
        <div className="mt-10">
          <a href="/intelli" className="text-cyan-600 hover:underline">← Späť na INTELLI</a>
        </div>
      </main>
    </>
  );
}
