import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ArrowDown } from 'lucide-react';

export default function ArchitecturePage() {
  const architecture = [
    {
      component: 'InputAssembler',
      description: 'Collects brand data from multiple sources',
      inputs: ['Website content', 'Backlink profiles', 'Social signals', 'Third-party mentions'],
    },
    {
      component: 'ContextPack',
      description: 'Structures raw data into analyzable format',
      inputs: ['Entity graph', 'Content corpus', 'Authority signals', 'Temporal metadata'],
    },
    {
      component: 'Audit Modules',
      description: '7 parallel analysis streams',
      inputs: [
        'Content Relevance',
        'Entity Recognition',
        'E-E-A-T Signals',
        'Citation Worthiness',
        'Semantic Clarity',
        'Freshness Signals',
        'Cross-Platform Presence',
      ],
    },
    {
      component: 'Output Surface',
      description: 'Synthesizes insights into actionable recommendations',
      inputs: ['Scores & metrics', 'Issues with severity', 'Prioritized recommendations', 'Trend analysis'],
    },
  ];

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">System Architecture</h1>
      
      <div className="space-y-6">
        {architecture.map((item, index) => (
          <div key={item.component}>
            <Card>
              <CardHeader>
                <CardTitle>{item.component}</CardTitle>
                <p className="text-sm text-slate-600">{item.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 md:grid-cols-2">
                  {item.inputs.map((input) => (
                    <div key={input} className="rounded-md bg-slate-50 p-3 text-sm">
                      {input}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {index < architecture.length - 1 && (
              <div className="flex justify-center py-2">
                <ArrowDown className="h-6 w-6 text-slate-400" />
              </div>
            )}
          </div>
        ))}
      </div>

      <Card className="mt-8 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Design Principles</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span><strong>Modular:</strong> Each component operates independently with clear interfaces</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span><strong>Parallel Processing:</strong> Audit modules run concurrently for speed</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span><strong>Data-Driven:</strong> All insights derived from structured analysis, not heuristics</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span><strong>Extensible:</strong> New audit modules can be added without refactoring core system</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
