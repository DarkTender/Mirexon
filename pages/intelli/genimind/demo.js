
import { useState } from 'react';
import Head from 'next/head';

export default function GenimindDemo() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [tone, setTone] = useState('Futuristický');

  const generateText = async () => {
    setLoading(true);
    setOutput("Generujem myšlienku...");

    try {
      const res = await fetch('/api/genimind', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, tone }),
      });

      const data = await res.json();
      setOutput(data.text || '⚠️ Niečo sa pokazilo.');
    } catch (err) {
      setOutput('⚠️ Chyba pri generovaní.');
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>GENIMIND – Demo | MIREXON™</title>
      </Head>
      <main className="min-h-screen px-4 py-12 text-white bg-black max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">GENIMIND™ DEMO</h1>
        <p className="text-gray-400 mb-8">Zadaj myšlienku a nechaj MIREXON AI generovať obsah.</p>

        <textarea
          rows="4"
          className="w-full p-3 rounded bg-black border border-cyan-700 text-white"
          placeholder="Zadaj myšlienku alebo tému..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />

        <div className="my-4">
          <label className="mr-3 text-cyan-300">Štýl:</label>
          <select
            value={tone}
            onChange={e => setTone(e.target.value)}
            className="bg-black border border-cyan-700 text-white px-3 py-1 rounded"
          >
            <option>Futuristický</option>
            <option>Filozofický</option>
            <option>Revolučný</option>
          </select>
        </div>

        <button
          onClick={generateText}
          className="mt-4 px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition"
          disabled={loading || !prompt}
        >
          {loading ? "Generujem..." : "Generuj"}
        </button>

        <div className="mt-10 text-left bg-black/40 p-6 rounded border border-cyan-800 shadow">
          <h2 className="text-cyan-300 text-lg mb-2">Výstup:</h2>
          <p className="text-gray-300 whitespace-pre-line">{output}</p>
        </div>
      </main>
    </>
  );
}
