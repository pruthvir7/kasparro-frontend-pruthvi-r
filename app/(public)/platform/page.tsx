import PipelineFlow from '@/components/features/PipelineFlow';
import { Database, Cpu, FileText, BarChart3 } from 'lucide-react';

export default function PlatformPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Platform Overview</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Kasparro bridges the gap between traditional SEO and AI-first search. Our platform analyzes how AI models perceive, understand, and cite your brand.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Audit Pipeline</h2>
          <div className="mt-6 rounded-lg bg-slate-50 p-8">
            <PipelineFlow />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">What Data We Consume</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <Database className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Brand & Content</h3>
              <p className="mt-2 text-slate-600">
                Website content, blog articles, documentation, product pages, author bios, published dates
              </p>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <Cpu className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Authority Signals</h3>
              <p className="mt-2 text-slate-600">
                Backlink profiles, domain authority, third-party mentions, review platform presence
              </p>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <FileText className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Semantic Structure</h3>
              <p className="mt-2 text-slate-600">
                HTML hierarchy, schema markup, entity definitions, topic clusters, internal linking
              </p>
            </div>
            
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <BarChart3 className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Cross-Platform Data</h3>
              <p className="mt-2 text-slate-600">
                Social media presence, forum discussions, podcast appearances, video content
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">What Brands Receive</h2>
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-slate-700">
                  <strong className="text-slate-900">AI Visibility Score:</strong> How often and accurately AI models reference your brand
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-slate-700">
                  <strong className="text-slate-900">Trust & E-E-A-T Assessment:</strong> Evaluation of expertise, authoritativeness, trustworthiness signals
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-slate-700">
                  <strong className="text-slate-900">Citation Worthiness Analysis:</strong> What makes your content likely to be cited by AI models
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-slate-700">
                  <strong className="text-slate-900">Module-Specific Insights:</strong> Detailed breakdowns across 7 audit dimensions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-slate-700">
                  <strong className="text-slate-900">Actionable Recommendations:</strong> Prioritized steps to improve AI search performance
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-12 pb-12">
          <h2 className="mb-4 text-2xl font-bold">How We Differ from Traditional SEO Tools</h2>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-4 text-left font-semibold text-slate-900">Dimension</th>
                    <th className="p-4 text-left font-semibold text-slate-900">Traditional SEO</th>
                    <th className="p-4 text-left font-semibold text-slate-900">Kasparro (AI-SEO)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="transition-colors hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">Primary Goal</td>
                    <td className="p-4 text-slate-600">Rank higher in search results</td>
                    <td className="p-4 text-slate-600">Be cited by AI models</td>
                  </tr>
                  <tr className="transition-colors hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">Optimization Target</td>
                    <td className="p-4 text-slate-600">Google's ranking algorithm</td>
                    <td className="p-4 text-slate-600">AI training patterns & retrieval systems</td>
                  </tr>
                  <tr className="transition-colors hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">Key Metrics</td>
                    <td className="p-4 text-slate-600">Keyword rankings, backlinks</td>
                    <td className="p-4 text-slate-600">Citation frequency, entity recognition</td>
                  </tr>
                  <tr className="transition-colors hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">Content Focus</td>
                    <td className="p-4 text-slate-600">Keyword density, metadata</td>
                    <td className="p-4 text-slate-600">Semantic clarity, context, trustworthiness</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
