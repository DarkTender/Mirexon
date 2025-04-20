
import Head from 'next/head';

export default function Genimind() {
  return (
    <>
      <Head>
        <title>GENIMIND | MIREXON™</title>
      </Head>
      <main className="min-h-screen px-6 py-20 text-white bg-black text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-8">GENIMIND</h1>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg mb-12">Generatívna AI pre obsah, texty, myšlienky a tvorbu s hĺbkou a filozofiou.</p>
        <a href="/intelli/genimind/demo" className="inline-block mt-4 px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">
          Spustiť demo
        </a>
        <div className="mt-10">
          <a href="/intelli" className="text-cyan-600 hover:underline">← Späť na INTELLI</a>
        </div>
      </main>
    </>
  );
}
