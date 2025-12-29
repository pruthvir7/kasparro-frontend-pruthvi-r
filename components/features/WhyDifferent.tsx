import { motion } from 'framer-motion';
import { Sparkles, Target, Star } from 'lucide-react';

const AISeoExamples = [
  {
    icon: Sparkles,
    title: 'No Rankings, Only Citations',
    subtitle: 'AI cites authority, not page #1',
    examples: [
      '"Best CRM for startups" → ChatGPT cites HubSpot (authority)',
      'Stripe cited for "payments" across 23 query variations',
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Target,
    title: 'Context Over Keywords',
    subtitle: 'Semantic beats keyword stuffing',
    examples: [
      'OpenAI: "AI safety" → "LLM ethics" → "model alignment"',
      'Notion: "notes" → "productivity" → "collaboration" (15+ terms)',
    ],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Star,
    title: 'Trust is Algorithmic',
    subtitle: 'E-E-A-T predicts citations',
    examples: [
      'Anthropic: 3x citations from research papers + founder bios',
      'Vercel: GitHub stars + Twitter → "trusted Next.js host"',
    ],
    color: 'from-amber-500 to-orange-600',
  },
];

export default function WhyDifferent() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
            Why AI-SEO is Different
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Traditional SEO = page rankings. AI-SEO = being the cited answer.
          </p>
        </motion.div>

        {/* ✅ PERFECTLY ALIGNED CARDS */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {AISeoExamples.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative h-full overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-slate-200 flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl -z-10`}></div>
              
              <div className="relative p-8 flex-1 flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/50">
                  <feature.icon className="h-8 w-8 text-slate-900" />
                </div>
                
                {/* Title + Subtitle - Fixed height */}
                <div className="flex-1 mb-6">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight group-hover:text-slate-950 line-clamp-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 font-medium text-lg leading-relaxed line-clamp-2">
                    {feature.subtitle}
                  </p>
                </div>
                
                {/* Examples - Fixed height container */}
                <div className="space-y-3 min-h-[140px]">
                  {feature.examples.map((example, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="group/example pl-6 border-l-4 border-slate-200 bg-gradient-to-r from-slate-50/50 to-white/0 py-2.5 px-1 rounded-r-xl hover:bg-slate-100 hover:border-slate-300 transition-all duration-200 cursor-default line-clamp-2"
                    >
                      <p className="text-sm font-semibold text-slate-800 leading-tight tracking-tight">
                        {example}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
