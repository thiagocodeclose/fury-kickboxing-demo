// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Menu, X, Star, MapPin, Phone, Mail, Clock,
  Instagram, Facebook, CheckCircle, ArrowRight, ChevronDown, Flame, Trophy, Calendar
} from 'lucide-react';
import { studioInfo, stats, programs, coaches, testimonials, upcoming, pricing } from '@/lib/site-data';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Nav ─── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = ['Programs', 'Events', 'Coaches', 'Pricing', 'Contact'];
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/96 backdrop-blur border-b border-[#222]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Flame size={20} className="text-fy-amber" />
          <div>
            <span className="font-heading font-black text-xl tracking-widest text-white uppercase">FURY</span>
            <span className="text-fy-muted text-[10px] uppercase tracking-[0.3em] font-body block leading-none">Kickboxing · Las Vegas</span>
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className="text-sm font-body font-semibold text-fy-muted hover:text-fy-text transition-colors tracking-wide uppercase">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-fy-amber hover:bg-[#cc5800] text-white font-body font-semibold text-xs uppercase tracking-widest px-5 py-2.5 transition-colors">
          Free Trial
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#141414] border-t border-[#222] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-sm font-body font-semibold text-fy-muted uppercase tracking-wide">{l}</a>
          ))}
          <a href="#contact" className="bg-fy-amber text-white font-body font-semibold text-sm uppercase tracking-widest px-5 py-3 text-center">Free Trial</a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero — VIDEO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1549476464-37392f717541?w=1600&q=85"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2022/09/01/129559-745773856_large.mp4" type="video/mp4" />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/75 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />
        {/* Amber heat glow */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#FF6F00]/15 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-fy-amber/15 border border-fy-amber/40 px-4 py-1.5 mb-8">
            <Flame size={12} className="text-fy-amber" />
            <span className="text-fy-amber font-body font-semibold text-xs uppercase tracking-[0.3em]">Las Vegas's #1 Competitive Kickboxing Gym</span>
          </div>

          <h1 className="font-heading font-black text-7xl sm:text-9xl lg:text-[140px] text-white leading-none mb-4 tracking-tight">
            TRAIN.<br />
            COMPETE.<br />
            <span className="text-fy-amber">DOMINATE.</span>
          </h1>

          <p className="text-fy-muted text-lg mb-8 max-w-lg font-body">{studioInfo.subheadline}</p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-fy-amber hover:bg-[#cc5800] text-white font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-colors">
              Free Trial Class <ArrowRight size={15} />
            </a>
            <a href="#programs" className="inline-flex items-center gap-2 border border-[#444] hover:border-fy-amber text-fy-text font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-colors">
              Our Programs
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-[#222]">
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-heading font-black text-4xl text-white">{s.value}</div>
                <div className="text-fy-muted text-xs uppercase tracking-widest mt-0.5 font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={20} className="text-white/30" />
      </div>
    </section>
  );
}

/* ─── Programs ─── */
function Programs() {
  const levelColors = { 'Beginner': 'text-green-400', 'Intermediate': 'text-yellow-400', 'Advanced': 'text-orange-400', 'Competition': 'text-fy-amber', 'All Levels': 'text-blue-400', 'Ages 10–17': 'text-purple-400' };
  return (
    <section id="programs" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-fy-amber" />
            <p className="text-fy-amber font-body font-semibold text-sm uppercase tracking-[0.3em]">Training Programs</p>
            <div className="h-px w-8 bg-fy-amber" />
          </div>
          <h2 className="font-heading font-black text-7xl md:text-8xl text-white">PROGRAMS</h2>
          <p className="text-fy-muted mt-3 max-w-xl mx-auto font-body">From first class to world title — every level has a home at Fury.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((p, i) => (
            <div key={p.name}
              className="reveal bg-[#141414] border border-[#222] hover:border-fy-amber/40 p-6 transition-colors"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-black text-2xl text-white">{p.name}</h3>
                <span className={`text-xs font-body font-semibold uppercase tracking-wide ${levelColors[p.level] || 'text-fy-muted'}`}>{p.level}</span>
              </div>
              <p className="text-fy-muted text-sm leading-relaxed font-body">{p.description}</p>
              <div className="mt-4 pt-4 border-t border-[#222]">
                <a href="#contact" className="text-fy-amber text-sm font-body font-semibold uppercase tracking-wide hover:text-orange-300 transition-colors flex items-center gap-1.5">
                  Learn More <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Upcoming Events ─── */
function Events() {
  return (
    <section id="events" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-fy-amber" />
            <p className="text-fy-amber font-body font-semibold text-sm uppercase tracking-[0.3em]">Fight Calendar</p>
            <div className="h-px w-8 bg-fy-amber" />
          </div>
          <h2 className="font-heading font-black text-7xl md:text-8xl text-white">EVENTS</h2>
          <p className="text-fy-muted mt-3 max-w-lg mx-auto font-body">Upcoming competitions and fight nights featuring Fury athletes.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {upcoming.map((e, i) => (
            <div key={e.event}
              className="reveal bg-[#141414] border border-[#222] hover:border-fy-amber/30 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex-shrink-0 bg-fy-amber/10 border border-fy-amber/30 p-3">
                <Calendar size={20} className="text-fy-amber" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-black text-xl text-white">{e.event}</h3>
                <p className="text-fy-muted text-sm font-body">{e.location}</p>
              </div>
              <div className="text-right">
                <div className="font-body font-semibold text-fy-text text-sm">{e.date}</div>
                <div className="inline-flex items-center gap-1 mt-1 bg-fy-amber/15 border border-fy-amber/30 px-2 py-0.5 rounded-sm">
                  <span className="text-fy-amber text-xs font-body font-bold uppercase tracking-wide">{e.rules}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Coaches ─── */
function Coaches() {
  return (
    <section id="coaches" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-fy-amber" />
            <p className="text-fy-amber font-body font-semibold text-sm uppercase tracking-[0.3em]">In Your Corner</p>
            <div className="h-px w-8 bg-fy-amber" />
          </div>
          <h2 className="font-heading font-black text-7xl md:text-8xl text-white">COACHES</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((c, i) => (
            <div key={c.name} className="reveal group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative overflow-hidden aspect-[3/4] mb-5">
                <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="h-0.5 w-8 bg-fy-amber mb-2" />
                </div>
              </div>
              <h3 className="font-heading font-black text-xl text-white mb-1">{c.name}</h3>
              <p className="text-fy-amber font-body text-xs uppercase tracking-wide mb-3">{c.title}</p>
              <p className="text-fy-muted text-sm leading-relaxed font-body">{c.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-fy-amber" />
            <p className="text-fy-amber font-body font-semibold text-sm uppercase tracking-[0.3em]">Fighter Reviews</p>
            <div className="h-px w-8 bg-fy-amber" />
          </div>
          <h2 className="font-heading font-black text-7xl md:text-8xl text-white">WHAT THEY SAY</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className="reveal bg-[#141414] border border-[#222] p-8"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={13} className="fill-fy-amber text-fy-amber" />)}
              </div>
              <p className="text-fy-text text-sm leading-relaxed mb-6 font-body">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-fy-amber flex items-center justify-center font-heading font-black text-white">{t.name[0]}</div>
                <span className="font-heading font-black text-xl text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-fy-amber" />
            <p className="text-fy-amber font-body font-semibold text-sm uppercase tracking-[0.3em]">Membership</p>
            <div className="h-px w-8 bg-fy-amber" />
          </div>
          <h2 className="font-heading font-black text-7xl md:text-8xl text-white">PRICING</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricing.map((p, i) => (
            <div key={p.name}
              className={`reveal relative p-8 ${p.highlight ? 'border-2 border-fy-amber bg-[#1a0e00]' : 'bg-[#141414] border border-[#222]'}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fy-amber text-white font-body font-bold text-xs uppercase tracking-wider px-4 py-1">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading font-black text-3xl text-white mb-1">{p.name}</h3>
              <div className="mb-6">
                <span className="font-heading font-black text-5xl text-white">{p.price}</span>
                <span className={`text-sm ml-1 font-body ${p.highlight ? 'text-orange-300' : 'text-fy-muted'}`}>{p.period}</span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={13} className="text-fy-amber" />
                    <span className={`text-sm font-body ${p.highlight ? 'text-fy-text' : 'text-fy-muted'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className={`block text-center font-body font-semibold text-sm uppercase tracking-widest py-3 transition-colors ${p.highlight ? 'bg-fy-amber text-white hover:bg-[#cc5800]' : 'border border-fy-amber text-fy-amber hover:bg-fy-amber/10'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-fy-amber" />
              <p className="text-fy-amber font-body font-semibold text-sm uppercase tracking-[0.3em]">Step Into Fury</p>
            </div>
            <h2 className="font-heading font-black text-6xl md:text-7xl text-white mb-6">YOUR FREE CLASS IS WAITING</h2>
            <p className="text-fy-muted leading-relaxed mb-8 max-w-md font-body">
              Come train with world champions. One free class, no commitment, no judgment. See what Fury is about.
            </p>
            <div className="space-y-4 mb-8">
              {[{ icon: MapPin, label: studioInfo.address }, { icon: Phone, label: studioInfo.phone }, { icon: Mail, label: studioInfo.email }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={15} className="text-fy-amber flex-shrink-0" />
                  <span className="text-fy-muted text-sm font-body">{label}</span>
                </div>
              ))}
            </div>
            {Object.entries(studioInfo.hours).map(([day, hrs]) => (
              <div key={day} className="flex items-center gap-3 mb-2">
                <Clock size={13} className="text-fy-muted flex-shrink-0" />
                <span className="text-fy-muted text-sm font-body"><strong className="text-fy-text">{day}:</strong> {hrs}</span>
              </div>
            ))}
          </div>
          <div className="reveal bg-[#141414] border border-[#222] p-8">
            <h3 className="font-heading font-black text-3xl text-white mb-6">REQUEST FREE TRIAL</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[['First Name', 'Your'], ['Last Name', 'Name']].map(([label, ph]) => (
                  <div key={label}>
                    <label className="block text-fy-muted text-xs uppercase tracking-wide mb-1.5 font-body">{label}</label>
                    <input type="text" placeholder={ph} className="w-full bg-[#0A0A0A] border border-[#222] focus:border-fy-amber text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#333] font-body" />
                  </div>
                ))}
              </div>
              {[['Email', 'email', 'you@email.com'], ['Phone', 'tel', '(702) 555-0000']].map(([label, type, ph]) => (
                <div key={label}>
                  <label className="block text-fy-muted text-xs uppercase tracking-wide mb-1.5 font-body">{label}</label>
                  <input type={type} placeholder={ph} className="w-full bg-[#0A0A0A] border border-[#222] focus:border-fy-amber text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#333] font-body" />
                </div>
              ))}
              <div>
                <label className="block text-fy-muted text-xs uppercase tracking-wide mb-1.5 font-body">Program Interest</label>
                <select className="w-full bg-[#0A0A0A] border border-[#222] focus:border-fy-amber text-white text-sm px-4 py-3 outline-none transition-colors font-body">
                  <option>Select a program...</option>
                  {programs.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-fy-amber hover:bg-[#cc5800] text-white font-body font-semibold text-sm uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2">
                Book My Free Class <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#222] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Flame size={16} className="text-fy-amber" />
          <div>
            <span className="font-heading font-black text-white">FURY KICKBOXING</span>
            <span className="text-fy-muted text-[10px] block uppercase tracking-widest font-body">Las Vegas, NV</span>
          </div>
        </div>
        <p className="text-[#444] text-xs font-body">© 2026 Fury Kickboxing. All rights reserved.</p>
        <div className="flex gap-3">
          <a href={studioInfo.instagram} className="w-9 h-9 bg-[#141414] border border-[#222] hover:border-fy-amber flex items-center justify-center transition-colors">
            <Instagram size={14} className="text-fy-muted" />
          </a>
          <a href={studioInfo.facebook} className="w-9 h-9 bg-[#141414] border border-[#222] hover:border-fy-amber flex items-center justify-center transition-colors">
            <Facebook size={14} className="text-fy-muted" />
          </a>
        </div>
        <p className="text-[#444] text-xs font-body">Powered by <span className="text-fy-amber">Koriva Sites</span></p>
      </div>
    </footer>
  );
}

export default function Page() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Programs />
      <Events />
      <Coaches />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
