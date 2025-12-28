import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { getSeverityColor } from '@/lib/utils';
import { AuditModule } from '@/types';
import { AlertCircle, CheckCircle2, Lightbulb } from 'lucide-react';

interface AuditModuleDetailProps {
  module: AuditModule;
}

export default function AuditModuleDetail({ module }: AuditModuleDetailProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{module.name}</h1>
        <p className="mt-2 text-lg text-slate-600">{module.description}</p>
        <div className="mt-4 flex items-center space-x-4">
          <div className="text-4xl font-bold text-primary">{module.score}/100</div>
          <div className={`rounded-full px-4 py-1 text-sm font-semibold ${getSeverityColor(module.status)}`}>
            {module.status.toUpperCase()}
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
            Key Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {module.insights.map((insight, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600" />
                <span className="text-slate-700">{insight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <AlertCircle className="mr-2 h-5 w-5 text-red-600" />
            Issues Detected
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {module.issues.map((issue, index) => (
              <div
                key={index}
                className={`rounded-md border p-4 ${getSeverityColor(issue.severity)}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{issue.message}</p>
                    <p className="mt-1 text-sm opacity-90">{issue.impact}</p>
                  </div>
                  <span className="ml-4 text-xs font-semibold uppercase">
                    {issue.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Lightbulb className="mr-2 h-5 w-5 text-yellow-600" />
            Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {module.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-xs font-semibold text-yellow-800">
                  {index + 1}
                </span>
                <span className="text-slate-700">{rec}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
