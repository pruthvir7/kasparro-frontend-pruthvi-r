'use client';

import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { getStatusColor } from '@/lib/utils';
import { AuditModule } from '@/types';

interface ModuleCardProps {
  module: AuditModule;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function ModuleCard({ module, isSelected, onClick }: ModuleCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'border-primary ring-2 ring-primary/20' : ''
      }`}
      onClick={onClick}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-900">{module.name}</h3>
            <p className="mt-2 text-sm text-slate-600 line-clamp-2">{module.description}</p>
          </div>
          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <div className="text-2xl font-bold text-primary">{module.score}</div>
            <Badge className={`${getStatusColor(module.status)}`}>
              {module.status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
