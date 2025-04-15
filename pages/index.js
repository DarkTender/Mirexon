
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));

    const script = document.createElement('script');
    script.src = '/background.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const divisions = [
    { name: 'INTELLI', desc: 'Advanced Artificial Intelligence Solutions', link: '/intelli' },
    { name: 'SPACE', desc: 'Exploring New Frontiers in Space Technology', link: '/space' },
    { name: 'CORE', desc: 'Foundational Technologies for Tomorrow', link: '/core' },
    { name: 'CULTURE', desc: 'Innovating Intersection of Tech & Society', link: '/culture' },
  ];

  return (
    <>
      <canvas id="bgCanvas" className="fixed top-0 left-0 z-0 w-full h-full"></canvas>
      <main className="relative z-10 min-h-screen bg-transparent text-white px-4 py-12 text-center space-y-32">
        <section className="fade-section">
          <img src="/logo.png" alt="MIREXON Logo" className="w-32 h-32 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 tracking-widest">MIREXON™</h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">Pioneering the future through intelligent technology.</p>
          <button className="mt-6 px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">LEARN MORE</button>
        </section>

        {divisions.map((item, index) => (
          <section key={index} className="fade-section max-w-3xl mx-auto border border-cyan-800 rounded-xl p-8 shadow-md hover:shadow-cyan-700 transition-all bg-black/40 backdrop-blur-md">
            <h2 className="text-3xl text-cyan-300 font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-400 text-md mb-4">{item.desc}</p>
            <a href={item.link} className="inline-block mt-2 px-5 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">Explore {item.name}</a>
          </section>
        ))}

        <section className="fade-section grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
    </>
  );
}
