
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import NeuralBackground from '../components/NeuralBackground';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById("intro-loader");
      if (loader) {
        loader.classList.add("fade-out");
        setTimeout(() => setLoading(false), 1000);
      }
    }, 3500);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (session?.user) {
      fetch('/api/user-info')
        .then(res => res.json())
        .then(data => setCredits(data.credits));
    }
  }, [session]);

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
      <NeuralBackground />
      <canvas id="bgCanvas" className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"></canvas>
      <main className="relative z-10 min-h-screen px-4 py-12 text-center space-y-32 text-white">
        <section className="fade-section">
          <img src="/logo.png" alt="MIREXON Logo" className="w-32 h-32 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 tracking-widest hover:scale-105 transition-transform duration-300">MIREXON™</h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">Pioneering the future through intelligent technology.</p>

          {session ? (
            <div className="mt-6 space-y-2">
              <p className="text-cyan-300">Vitaj, {session.user.email}</p>
              <p className="text-cyan-400">Kredity: {credits !== null ? credits : "..."}</p>
              <button onClick={() => signOut()} className="px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">ODHLÁSIŤ SA</button>
            </div>
          ) : (
            <button onClick={() => signIn()} className="mt-6 px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">PRIHLÁSIŤ SA</button>
          )}
        </section>

        {divisions.map((item, index) => (
          <section key={index} className="fade-section max-w-3xl mx-auto border border-cyan-800 rounded-xl p-8 shadow-md hover:shadow-cyan-700 transition-all bg-black/60 backdrop-blur-lg hover:scale-105 transform duration-300">
            <h2 className="text-3xl text-cyan-300 font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-400 text-md mb-4">{item.desc}</p>
            <a href={item.link} className="inline-block mt-2 px-5 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded transition">Explore {item.name}</a>
          </section>
        ))}
      </main>
    </>
  );
}
