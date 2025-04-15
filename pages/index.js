
export default function Home() {
  const divisions = [
    { name: 'INTELLI', desc: 'Advanced Artificial Intelligence Solutions', link: '/intelli' },
    { name: 'SPACE', desc: 'Exploring New Frontiers in Space Technology', link: '/space' },
    { name: 'CORE', desc: 'Foundational Technologies for Tomorrow', link: '/core' },
    { name: 'CULTURE', desc: 'Innovating Intersection of Tech & Society', link: '/culture' },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center fade-in">
      <img src="/logo.png" alt="MIREXON Logo" className="w-32 h-32 mb-6 animate-pulse" />
      <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 tracking-widest">MIREXON™</h1>

      <section className="mt-6">
        <h2 className="text-lg md:text-xl text-gray-300">Pioneering the future through intelligent technology.</h2>
        <button className="mt-4 px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">LEARN MORE</button>
      </section>

      <section className="mt-20 max-w-4xl w-full">
        <h3 className="text-2xl text-cyan-300 mb-6">DIVISIONS</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {divisions.map((item, i) => (
            <a href={item.link} key={i} className="border border-cyan-800 p-4 rounded hover:bg-cyan-900/10 hover:shadow-md transition block">
              <h4 className="text-cyan-400 text-lg font-bold">{item.name}</h4>
              <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl w-full">
        <div className="text-center">
          <h3 className="text-xl text-cyan-300 mb-2">ACCESS</h3>
          <a href="/access" className="inline-block px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">GET STARTED</a>
        </div>
        <div className="text-center">
          <h3 className="text-xl text-cyan-300 mb-2">PARTNER WITH US</h3>
          <a href="/partner" className="inline-block px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">JOIN NOW</a>
        </div>
      </section>
    </main>
  );
}
