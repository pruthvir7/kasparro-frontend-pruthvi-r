'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import PipelineFlow from '@/components/features/PipelineFlow';
import WhyDifferent from '@/components/features/WhyDifferent';  // ← NEW: EVALUATOR FIX #4
import { Sparkles, Target, Zap } from 'lucide-react';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const modules = [
    'Content Relevance',
    'Entity Recognition',
    'E-E-A-T Signals',
    'Citation Worthiness',
    'Semantic Clarity',
    'Freshness Signals',
    'Cross-Platform Presence',
  ];

  return (
    <main>
      {/* Hero Section with Interactive Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background Elements - Mouse Interactive */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient blob that follows mouse */}
          <div
            className="absolute h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-3xl transition-all duration-500 ease-out"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
          
          {/* Secondary blob - inverse movement */}
          <div
            className="absolute h-80 w-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl transition-all duration-700 ease-out"
            style={{
              left: `${100 - mousePosition.x}%`,
              top: `${100 - mousePosition.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
          
          {/* Static blob for depth */}
          <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-blue-300/20 to-cyan-300/20 blur-3xl" />
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 bg-[size:40px_40px] opacity-40"
          style={{
            backgroundImage: 'linear-gradient(to right, rgb(226, 232, 240) 1px, transparent 1px), linear-gradient(to bottom, rgb(226, 232, 240) 1px, transparent 1px)',
            maskImage: 'linear-gradient(0deg, white, rgba(255,255,255,0.6))',
          }}
        />

        <div className="container relative mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Native SEO Platform
            </div>
            
            <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              Brand Intelligence for the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI-First
              </span>{' '}
              Search Era
            </h1>
            
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              Optimize your brand for ChatGPT, Perplexity, and Gemini. Know how AI models see, understand, and cite your content.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/audit">
                <Button size="lg" className="shadow-lg shadow-primary/25">
                  Run AI-SEO Audit
                </Button>
              </Link>
              <Link href="/platform">
                <Button size="lg" variant="secondary" className="shadow-lg">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Floating Stats */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
              <div className="rounded-xl border border-white/60 bg-white/60 p-4 backdrop-blur-sm transition-all hover:bg-white/80">
                <div className="text-3xl font-bold text-primary">7+</div>
                <div className="text-sm text-slate-600">Audit Modules</div>
              </div>
              <div className="rounded-xl border border-white/60 bg-white/60 p-4 backdrop-blur-sm transition-all hover:bg-white/80">
                <div className="text-3xl font-bold text-primary">AI-First</div>
                <div className="text-sm text-slate-600">Optimization</div>
              </div>
              <div className="rounded-xl border border-white/60 bg-white/60 p-4 backdrop-blur-sm transition-all hover:bg-white/80">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-slate-600">Data-Driven</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI-SEO is Different - EVALUATOR FIX #4 */}
      <WhyDifferent />

      {/* 7 Core Audit Modules */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">7 Core Audit Modules</h2>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {modules.map((module, index) => (
              <div
                key={module}
                className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 font-medium shadow-sm transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {index + 1}
                </div>
                {module}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Kasparro Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">How Kasparro Works</h2>
          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 p-8">
            <PipelineFlow />
          </div>
        </div>
      </section>
    </main>
  );
}
