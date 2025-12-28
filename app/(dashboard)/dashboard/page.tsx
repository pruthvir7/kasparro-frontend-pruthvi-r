'use client';

import { useState } from 'react';
import Link from 'next/link';
import MetricCard from '@/components/features/MetricCard';
import BrandSelector from '@/components/features/BrandSelector';
import { formatDate } from '@/lib/utils';
import brandDataImport from '@/data/brands.json';
import auditDataImport from '@/data/audit-data/modules.json';
import { BrandData, AuditData } from '@/types';
import { useToast } from '@/lib/useToast';
import { PlayCircle, FileText, Download } from 'lucide-react';

const brandData = brandDataImport as BrandData;
const auditData = auditDataImport as AuditData;

export default function DashboardPage() {
  const { brands, currentBrand } = brandData;
  const [isRunningAudit, setIsRunningAudit] = useState(false);
  const { showToast, ToastComponent } = useToast();

  const handleRunAudit = () => {
    setIsRunningAudit(true);
    showToast('Starting comprehensive AI-SEO audit...', 'info');
    
    setTimeout(() => {
      setIsRunningAudit(false);
      showToast('Audit complete! Check the Audit page for results.', 'success');
    }, 2000);
  };

  const handleExport = () => {
    // Create comprehensive CSV report
    let csvContent = `Kasparro AI-SEO Audit Report\n`;
    csvContent += `Generated: ${new Date().toLocaleString()}\n\n`;
    
    // Brand Information
    csvContent += `BRAND INFORMATION\n`;
    csvContent += `Brand Name,${currentBrand.name}\n`;
    csvContent += `Domain,${currentBrand.domain}\n`;
    csvContent += `Industry,${currentBrand.industry || 'N/A'}\n\n`;
    
    // Overview Metrics
    csvContent += `OVERVIEW METRICS\n`;
    csvContent += `Metric,Score,Trend\n`;
    csvContent += `AI Visibility Score,${currentBrand.metrics?.aiVisibilityScore},${currentBrand.metrics?.trend || 'N/A'}\n`;
    csvContent += `Trust / E-E-A-T Score,${currentBrand.metrics?.trustScore},${currentBrand.metrics?.trend || 'N/A'}\n`;
    csvContent += `Non-Branded Keyword Coverage,${currentBrand.metrics?.nonBrandedKeywordCoverage}%,N/A\n`;
    csvContent += `Last Audit Date,${formatDate(currentBrand.metrics?.lastAuditDate || '')},N/A\n\n`;
    
    // Detailed Module Analysis
    csvContent += `DETAILED MODULE ANALYSIS\n\n`;
    
    auditData.modules.forEach((module, index) => {
      csvContent += `${index + 1}. ${module.name.toUpperCase()}\n`;
      csvContent += `Description,${module.description}\n`;
      csvContent += `Score,${module.score}/100\n`;
      csvContent += `Status,${module.status}\n\n`;
      
      // Key Insights
      csvContent += `Key Insights:\n`;
      module.insights.forEach((insight, i) => {
        csvContent += `${i + 1}. ${insight}\n`;
      });
      csvContent += `\n`;
      
      // Issues Detected
      csvContent += `Issues Detected:\n`;
      csvContent += `Severity,Issue,Impact\n`;
      module.issues.forEach((issue) => {
        csvContent += `${issue.severity.toUpperCase()},"${issue.message}","${issue.impact}"\n`;
      });
      csvContent += `\n`;
      
      // Recommendations
      csvContent += `Recommendations:\n`;
      module.recommendations.forEach((rec, i) => {
        csvContent += `${i + 1}. ${rec}\n`;
      });
      csvContent += `\n`;
      csvContent += `${'='.repeat(80)}\n\n`;
    });
    
    // Summary Statistics
    csvContent += `SUMMARY STATISTICS\n`;
    const avgScore = Math.round(
      auditData.modules.reduce((sum, m) => sum + m.score, 0) / auditData.modules.length
    );
    const excellentCount = auditData.modules.filter(m => m.status === 'excellent').length;
    const goodCount = auditData.modules.filter(m => m.status === 'good').length;
    const warningCount = auditData.modules.filter(m => m.status === 'warning').length;
    const criticalCount = auditData.modules.filter(m => m.status === 'critical').length;
    
    const totalIssues = auditData.modules.reduce((sum, m) => sum + m.issues.length, 0);
    const highSeverity = auditData.modules.reduce(
      (sum, m) => sum + m.issues.filter(i => i.severity === 'high').length, 0
    );
    const mediumSeverity = auditData.modules.reduce(
      (sum, m) => sum + m.issues.filter(i => i.severity === 'medium').length, 0
    );
    const lowSeverity = auditData.modules.reduce(
      (sum, m) => sum + m.issues.filter(i => i.severity === 'low').length, 0
    );
    
    csvContent += `Average Module Score,${avgScore}/100\n`;
    csvContent += `Total Modules Analyzed,${auditData.modules.length}\n`;
    csvContent += `Excellent Status,${excellentCount}\n`;
    csvContent += `Good Status,${goodCount}\n`;
    csvContent += `Warning Status,${warningCount}\n`;
    csvContent += `Critical Status,${criticalCount}\n\n`;
    
    csvContent += `Total Issues Detected,${totalIssues}\n`;
    csvContent += `High Severity Issues,${highSeverity}\n`;
    csvContent += `Medium Severity Issues,${mediumSeverity}\n`;
    csvContent += `Low Severity Issues,${lowSeverity}\n\n`;
    
    // Action Items Summary
    csvContent += `PRIORITY ACTION ITEMS\n`;
    csvContent += `The following issues require immediate attention:\n\n`;
    
    auditData.modules.forEach((module) => {
      const highIssues = module.issues.filter(i => i.severity === 'high');
      if (highIssues.length > 0) {
        csvContent += `${module.name}:\n`;
        highIssues.forEach((issue) => {
          csvContent += `- ${issue.message}\n`;
          csvContent += `  Impact: ${issue.impact}\n`;
        });
        csvContent += `\n`;
      }
    });
    
    csvContent += `\nEND OF REPORT\n`;
    csvContent += `Generated by Kasparro AI-SEO Platform\n`;
    
    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const timestamp = new Date().toISOString().split('T')[0];
    a.download = `Kasparro-Full-Audit-Report-${currentBrand.name}-${timestamp}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    showToast('Comprehensive audit report exported successfully!', 'success');
  };

  return (
    <div>
      {ToastComponent}
      
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-600">Overview of your AI-SEO performance</p>
        </div>
        <BrandSelector
          brands={brands}
          currentBrand={currentBrand}
          onSelect={() => {}}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="AI Visibility Score"
          value={currentBrand.metrics?.aiVisibilityScore || 0}
          trend={currentBrand.metrics?.trend}
        />
        <MetricCard
          title="Trust / E-E-A-T Score"
          value={currentBrand.metrics?.trustScore || 0}
          trend={currentBrand.metrics?.trend}
        />
        <MetricCard
          title="Non-Branded Coverage"
          value={currentBrand.metrics?.nonBrandedKeywordCoverage || 0}
          suffix="%"
        />
        <MetricCard
          title="Last Audit"
          value={formatDate(currentBrand.metrics?.lastAuditDate || '')}
        />
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Quick Actions</h2>
        <p className="mt-1 text-sm text-slate-600">Manage your audits and reports</p>
        
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <button 
            onClick={handleRunAudit}
            disabled={isRunningAudit}
            className="group flex flex-col rounded-lg border border-slate-200 bg-white p-5 text-left transition-all hover:border-primary hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:shadow-none"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                <PlayCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-slate-900">
                {isRunningAudit ? 'Running Audit...' : 'Run New Audit'}
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              {isRunningAudit ? 'Please wait...' : 'Start comprehensive AI-SEO analysis'}
            </p>
          </button>
          
          <Link href="/audit" className="group">
            <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 text-left transition-all hover:border-primary hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2 transition-colors group-hover:bg-blue-100">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900">View Full Report</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">Access detailed module insights</p>
            </div>
          </Link>
          
          <button 
            onClick={handleExport}
            className="group flex flex-col rounded-lg border border-slate-200 bg-white p-5 text-left transition-all hover:border-green-500 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-50 p-2 transition-colors group-hover:bg-green-100">
                <Download className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Export Data</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">Download full audit report as CSV</p>
          </button>
        </div>
      </div>
    </div>
  );
}
