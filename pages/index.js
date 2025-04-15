
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 overflow-hidden animate-parallax">
      <section className="flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] animate-pulse">
          MIREXON™
        </h1>
        <p className="text-xl md:text-2xl text-cyan-200 italic animate-fade-up delay-200">
          Pioneering the future through intelligent technology.
        </p>
        <button className="mt-6 px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-md transition duration-300 animate-fade-up delay-400">
          LEARN MORE
        </button>
      </section>
      <section className="mt-24 text-center space-y-4 animate-fade-in delay-700">
        <h2 className="text-3xl font-semibold text-cyan-300 tracking-widest">DIVISIONS</h2>
        <div className="grid md:grid-cols-4 gap-8 mt-6">
          {[
            { title: "INTELLI", desc: "Advanced Artificial Intelligence Solutions" },
            { title: "SPACE", desc: "Exploring New Frontiers in Space Technology" },
            { title: "CORE", desc: "Foundational Technologies for Tomorrow" },
            { title: "CULTURE", desc: "Innovating Intersection of Tech & Society" }
          ].map((d, i) => (
            <div key={i} className="p-4 border border-cyan-800 rounded-lg hover:shadow-xl hover:scale-105 transition transform duration-300 bg-opacity-10 backdrop-blur-md animate-fade-up delay-500">
              <h3 className="text-xl font-bold text-cyan-400">{d.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 grid md:grid-cols-2 gap-6 text-center animate-fade-in delay-1000">
        <div>
          <h3 className="text-2xl text-cyan-300 mb-2">ACCESS</h3>
          <button className="px-5 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition duration-300">
            GET STARTED
          </button>
        </div>
        <div>
          <h3 className="text-2xl text-cyan-300 mb-2">PARTNER WITH US</h3>
          <button className="px-5 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition duration-300">
            JOIN NOW
          </button>
        </div>
      </section>
    </main>
  );
}
