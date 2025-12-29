import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { getSeverityColor } from '@/lib/utils';
import { AuditModule } from '@/types';
import { AlertCircle, CheckCircle2, Lightbulb } from 'lucide-react';

interface AuditModuleDetailProps {
  module: AuditModule;
}

export default function AuditModuleDetail({ module }: AuditModuleDetailProps) {
  return (
    <div className="space-y-4">
      {/* Header - Compact */}
      <div className="pb-3 border-b border-slate-200">
        <h1 className="text-2xl font-bold leading-tight">
          {module.name}
        </h1>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
          {module.description}
        </p>
        <div className="mt-2 flex items-center gap-3">
          <div className="text-3xl font-black text-primary">
            {module.score}/100
          </div>
          <div className={`rounded-full px-3 py-1 text-xs font-semibold ${getSeverityColor(module.status)}`}>
            {module.status.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Insights - Compact */}
      {module.insights && module.insights.length > 0 && (
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-sm font-semibold">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
              Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-1 pb-3">
            <ul className="space-y-1.5">
              {module.insights.map((insight, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="mr-2 mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600" />
                  <span className="text-slate-700 leading-tight">{insight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Issues - Compact */}
      {module.issues && module.issues.length > 0 && (
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-sm font-semibold">
              <AlertCircle className="mr-2 h-4 w-4 text-red-600" />
              Issues Detected ({module.issues.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-1 pb-3">
            <div className="space-y-2">
              {module.issues.map((issue, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-md border ${getSeverityColor(issue.severity)}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm leading-tight">{issue.message}</p>
                      <p className="mt-1 text-xs text-slate-500">{issue.impact}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase px-2 py-0.5 bg-white/50 rounded">
                      {issue.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendations - Compact */}
      {module.recommendations && module.recommendations.length > 0 && (
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-sm font-semibold">
              <Lightbulb className="mr-2 h-4 w-4 text-yellow-600" />
              Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-1 pb-3">
            <ul className="space-y-1.5">
              {module.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="mr-2 mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-xs font-semibold text-yellow-800">
                    {index + 1}
                  </span>
                  <span className="text-slate-700 leading-tight">{rec}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
