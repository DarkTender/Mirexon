
import Head from 'next/head';

export default function Demo() {
  return (
    <>
      <Head>
        <title>LOGIX AI – Demo | MIREXON™</title>
      </Head>
      <main className="min-h-screen px-6 py-20 text-white bg-black text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-6">LOGIX AI – DEMO</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">Toto je demo rozhranie pre: LOGIX AI. Tu budeš môcť testovať jeho funkcionalitu v budúcnosti.</p>
        <div className="text-center">
          <a href="/intelli/logix" className="text-cyan-500 hover:underline">← Späť na nástroj</a>
        </div>
      </main>
    </>
  );
}
