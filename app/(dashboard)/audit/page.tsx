'use client';

import { useState } from 'react';
import ModuleCard from '@/components/features/ModuleCard';
import AuditModuleDetail from '@/components/features/AuditModuleDetail';
import auditDataImport from '@/data/audit-data/modules.json';
import { AuditData } from '@/types';

const auditData = auditDataImport as AuditData;

export default function AuditPage() {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(auditData.modules[0].id);
  const selectedModule = auditData.modules.find((m) => m.id === selectedModuleId);

  return (
    <div className="flex gap-6">
      <aside className="w-80 space-y-4">
        <h2 className="text-xl font-bold">Audit Modules</h2>
        {auditData.modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            isSelected={selectedModuleId === module.id}
            onClick={() => setSelectedModuleId(module.id)}
          />
        ))}
      </aside>

      <main className="flex-1">
        {selectedModule && <AuditModuleDetail module={selectedModule} />}
      </main>
    </div>
  );
}
