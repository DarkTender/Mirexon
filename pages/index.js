
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // INTRO TIMEOUT
    const timer = setTimeout(() => {
      const loader = document.getElementById("intro-loader");
      if (loader) {
        loader.classList.add("fade-out");
        setTimeout(() => setLoading(false), 1000); // extra 1s delay for smooth transition
      }
    }, 3500);

    // CANVAS + SCROLL EFFECTS
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));

    const script = document.createElement('script');
    script.src = '/background.js';
    script.async = true;
    document.body.appendChild(script);

    return () => clearTimeout(timer);
  }, []);

  const divisions = [
    { name: 'INTELLI', desc: 'Advanced Artificial Intelligence Solutions', link: '/intelli' },
    { name: 'SPACE', desc: 'Exploring New Frontiers in Space Technology', link: '/space' },
    { name: 'CORE', desc: 'Foundational Technologies for Tomorrow', link: '/core' },
    { name: 'CULTURE', desc: 'Innovating Intersection of Tech & Society', link: '/culture' },
  ];

  if (loading) {
    return (
      <div id="intro-loader" className="fixed inset-0 z-50 flex flex-col items-center justify-center text-cyan-400 bg-black animated-intro">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-cyan-800 via-black to-blue-900 animate-gradientMove opacity-30 z-0" />
        <h1 className="text-5xl font-bold tracking-widest z-10">MIREXON™</h1>
        <p className="mt-2 text-sm text-gray-400 z-10">Loading neural systems...</p>
      </div>
    );
  }

  return (
    <>
      <canvas id="bgCanvas" className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"></canvas>
      <main className="relative z-10 min-h-screen px-4 py-12 text-center space-y-32 text-white">
        <section className="fade-section">
          <img src="/logo.png" alt="MIREXON Logo" className="w-32 h-32 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 tracking-widest hover:scale-105 transition-transform duration-300">MIREXON™</h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">Pioneering the future through intelligent technology.</p>
          <button className="mt-6 px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">LEARN MORE</button>
        </section>

        {divisions.map((item, index) => (
          <section key={index} className="fade-section max-w-3xl mx-auto border border-cyan-800 rounded-xl p-8 shadow-md hover:shadow-cyan-700 transition-all bg-black/60 backdrop-blur-lg hover:scale-105 transform duration-300">
            <h2 className="text-3xl text-cyan-300 font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-400 text-md mb-4">{item.desc}</p>
            <a href={item.link} className="inline-block mt-2 px-5 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">Explore {item.name}</a>
          </section>
        ))}

        <section className="fade-section grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="text-center hover:scale-105 transform duration-300">
            <h3 className="text-xl text-cyan-300 mb-2">ACCESS</h3>
            <a href="/access" className="inline-block px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">GET STARTED</a>
          </div>
          <div className="text-center hover:scale-105 transform duration-300">
            <h3 className="text-xl text-cyan-300 mb-2">PARTNER WITH US</h3>
            <a href="/partner" className="inline-block px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">JOIN NOW</a>
          </div>
        </section>

        <section className="fade-section max-w-5xl mx-auto mt-24">
          <h3 className="text-2xl text-cyan-300 mb-6">VISUALS / NEURAL SYSTEMS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-cyan-900/10 rounded-lg p-2 hover:scale-105 transition">
                <div className="w-full h-24 bg-cyan-700/20 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
