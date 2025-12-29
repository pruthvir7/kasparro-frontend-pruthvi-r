'use client';

import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { getStatusColor } from '@/lib/utils';
import { AuditModule } from '@/types';
import { useDashboardStore } from '@/lib/dashboardStore';

interface ModuleCardProps {
  module: AuditModule;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const { selectedModule, setSelectedModule } = useDashboardStore();
  const isSelected = selectedModule === module.id;

  const handleClick = () => {
    setSelectedModule(isSelected ? null : module.id);
  };

  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-md hover:border-primary/50 border-2 ${
        isSelected 
          ? 'ring-2 ring-primary/30 border-primary shadow-xl bg-primary/5' 
          : 'border-slate-200'
      }`}
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-xl text-slate-900 leading-tight mb-2">
              {module.name}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
              {module.description}
            </p>
            
            {/* ✅ FIXED: Full insight visible */}
            {module.insights && module.insights.length > 0 && (
              <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <p className="text-xs font-medium text-slate-700 mb-1">Insight:</p>
                {/* ✅ NO line-clamp-1 - full text visible */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {module.insights[0]}
                </p>
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-end gap-3 flex-shrink-0 min-w-[80px]">
            <div className="text-3xl font-black bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
              {module.score}
            </div>
            <Badge className={`px-3 py-1 ${getStatusColor(module.status)}`}>
              {module.status}
            </Badge>
            
            {module.issues && module.issues.length > 0 && (
              <div className="flex items-center gap-1 text-xs bg-orange-50 border border-orange-200 text-orange-800 px-2 py-1 rounded-full font-medium">
                ⚠️ {module.issues.length} issues
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
