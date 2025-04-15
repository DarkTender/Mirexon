
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest animate-pulse">MIREXON™</h1>
        <p className="mt-4 text-lg md:text-2xl text-blue-400">Designed for minds that see beyond.</p>
        <p className="mt-2 text-sm md:text-lg text-gray-400">An intelligent future begins now.</p>
        <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm tracking-wider">
          ENTER THE CORE →
        </button>
      </section>

      {/* MANIFESTO */}
      <section className="max-w-3xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-semibold mb-4">MANIFESTO</h2>
        <p className="text-lg text-gray-300 leading-loose">
          We're not here to build products. We're here to redefine human thought.
          AI. Technology. Space. The mind. The future. United under a single name – MIREXON™.
          If something changes the world, it won’t be just code. It will be the idea that creates it.
        </p>
      </section>

      {/* DIVISIONS */}
      <section className="bg-gray-900 py-24 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">OUR DIVISIONS</h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { title: "INTELLI™", desc: "AI that feels and understands" },
            { title: "SPACE™", desc: "Preparing for a new home beyond Earth" },
            { title: "CORE™", desc: "Your gateway. Your code." },
            { title: "CULTURE™", desc: "Thoughts you can wear" },
          ].map((d, idx) => (
            <div key={idx} className="p-6 border border-gray-700 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-2">{d.title}</h3>
              <p className="text-sm text-gray-400">{d.desc}</p>
              <button className="mt-4 text-blue-400 hover:underline">LEARN MORE →</button>
            </div>
          ))}
        </div>
      </section>

      {/* ACCESS */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">ACCESS / BETA / COMMUNITY</h2>
        <p className="text-gray-300 text-lg">
          Join the first wave of MIREXON™ creators. Access early beta tools. Witness the evolution. Become part of the inner core.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
          GET STARTED →
        </button>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-950 py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact / Collaborate</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Want to build with us? Developer, designer, investor, visionary?
        </p>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <button className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">COLLABORATION</button>
          <button className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">INVESTMENT</button>
          <button className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">SUPPORT / MEDIA</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-600 bg-black">
        © {new Date().getFullYear()} MIREXON™. All rights reserved.
      </footer>
    </main>
  );
}
