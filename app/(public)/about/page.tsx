import { Card, CardContent } from '@/components/ui/Card';

export default function AboutPage() {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold">About Kasparro</h1>
          
          <section className="mt-8">
            <h2 className="text-2xl font-bold">Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              We're building the intelligence layer for brands navigating the AI-first search era. As AI models like ChatGPT, Perplexity, and Gemini reshape how people discover information, traditional SEO strategies are becoming obsolete.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Kasparro helps brands understand how AI models perceive them, what signals drive citations, and how to optimize for algorithmic trust.
            </p>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Product Philosophy</h2>
            <div className="mt-4 rounded-lg bg-slate-50 p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Data-Driven Precision:</h3>
                    <p className="mt-1 text-slate-700">Every insight is backed by structured analysis, not guesswork</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Actionable Over Theoretical:</h3>
                    <p className="mt-1 text-slate-700">We prioritize recommendations that brands can implement immediately</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Future-Focused:</h3>
                    <p className="mt-1 text-slate-700">Built for the AI-native search landscape, not legacy algorithms</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              We envision a world where brands can precisely measure and optimize their presence across AI systems—where being "citation-worthy" becomes as important as being "search-optimized."
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Kasparro will become the standard platform for AI-SEO intelligence, helping businesses of all sizes thrive in an AI-mediated information ecosystem.
            </p>
          </section>
        </div>
      </main>
    );
  }
  