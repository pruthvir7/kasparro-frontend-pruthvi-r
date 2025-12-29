'use client';

import { useEffect, useState } from 'react';
import ModuleCard from '@/components/features/ModuleCard';
import AuditModuleDetail from '@/components/features/AuditModuleDetail';
import auditDataImport from '@/data/audit-data/modules.json';
import brandDataImport from '@/data/brands.json';  // ✅ ADD BRANDS
import { AuditData, BrandData } from '@/types';
import { useDashboardStore } from '@/lib/dashboardStore';

const auditData = auditDataImport as AuditData;
const brandData = brandDataImport as BrandData;

export default function AuditPage() {
  const { selectedModule, currentBrandId } = useDashboardStore();  // ✅ ADD BRAND
  const [currentAuditData, setCurrentAuditData] = useState(auditData);
  const currentBrand = brandData.brands.find(b => b.id === currentBrandId) || brandData.brands[0];
  
  // ✅ DYNAMIC AUDIT DATA PER BRAND
  useEffect(() => {
    const brandSpecificData = getBrandSpecificAuditData(currentBrandId);
    setCurrentAuditData(brandSpecificData);
  }, [currentBrandId]);

  const selectedModuleId = selectedModule || currentAuditData.modules[0]?.id;
  const selectedModuleData = currentAuditData.modules.find((m) => m.id === selectedModuleId);

  const getBrandSpecificAuditData = (brandId: string): AuditData => {
    const baseModules = auditData.modules.map((module: any) => ({
      ...module,
      details: module.insights || [],
      // Brand-specific adjustments
    }));

    const brandAudits: Record<string, AuditData> = {
      'techflow-ai': { ...auditData, modules: baseModules },
      'openai': {
        ...auditData,
        modules: baseModules.map((module: any) => ({
          ...module,
          score: Math.max(85, module.score + 5),  // ✅ OpenAI: +5 boost
          status: module.score >= 90 ? 'excellent' : 
                  module.score >= 75 ? 'good' : 
                  module.score >= 60 ? 'warning' : 'critical'
        }))
      },
      'anthropic': {
        ...auditData,
        modules: baseModules.map((module: any) => ({
          ...module,
          score: Math.max(80, module.score + 2),  // ✅ Anthropic: +2 boost
          status: module.score >= 88 ? 'excellent' : 
                  module.score >= 70 ? 'good' : 
                  module.score >= 55 ? 'warning' : 'critical'
        }))
      }
    };

    return brandAudits[brandId] || auditData;
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* ✅ LEFT: Module List + BRAND HEADER */}
      <aside className="w-80 border-r border-slate-200 flex flex-col bg-white">
        {/* ✅ BRAND HEADER */}
        <div className="flex-shrink-0 px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-slate-900">AI-SEO Audit</h2>
            <span className="px-2 py-1 bg-primary/10 text-xs font-medium text-primary rounded-full">
              {currentBrand.name}
            </span>
          </div>
          <p className="text-sm text-slate-600">{currentBrand.domain}</p>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {currentAuditData.modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </aside>

      {/* RIGHT: Detail Panel */}
      <main className="flex-1 overflow-y-auto bg-slate-50">
        {selectedModuleData ? (
          <div className="p-8">
            <AuditModuleDetail module={selectedModuleData} />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center p-8">
            <div className="text-center max-w-md">
              <div className="mb-6 inline-flex rounded-full bg-slate-100 p-6">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Select an Audit Module
              </h3>
              <p className="text-slate-600">
                Click any module from the left panel to view detailed analysis, insights, issues, and recommendations.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
