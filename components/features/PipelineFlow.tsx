import { ArrowRight } from 'lucide-react';

const steps = [
  { id: 1, title: 'Input Assembly', desc: 'Collect brand data, content, backlinks' },
  { id: 2, title: 'Context Pack', desc: 'Structure data for AI analysis' },
  { id: 3, title: 'Audit Modules', desc: '7 parallel analysis streams' },
  { id: 4, title: 'Output Surface', desc: 'Actionable insights & recommendations' },
];

export default function PipelineFlow() {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
              {step.id}
            </div>
            <h4 className="mt-3 font-semibold">{step.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="mx-8 h-6 w-6 text-slate-400" />
          )}
        </div>
      ))}
    </div>
  );
}
