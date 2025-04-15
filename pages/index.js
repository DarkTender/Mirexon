
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest animate-pulse">MIREXON™</h1>
        <p className="mt-4 text-lg md:text-2xl text-blue-400">Designed for minds that see beyond.</p>
        <p className="mt-2 text-sm md:text-lg text-gray-400">An intelligent future begins now.</p>
        <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm tracking-wider">
          ENTER THE CORE →
        </button>
      </section>
    </main>
  );
}
