
import Head from 'next/head';

export default function Mindcore() {
  return (
    <>
      <Head>
        <title>MINDCORE AI | MIREXON™</title>
      </Head>
      <main className="min-h-screen px-6 py-20 text-white bg-black text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-8">MINDCORE AI</h1>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg mb-12">Neurónový engine pre pokročilé rozhodovanie, plánovanie a autonómiu. Tvoja AI myslí s tebou.</p>
        <a href="/intelli/mindcore/demo" className="inline-block mt-4 px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">
          Spustiť demo
        </a>
        <div className="mt-10">
          <a href="/intelli" className="text-cyan-600 hover:underline">← Späť na INTELLI</a>
        </div>
      </main>
    </>
  );
}
