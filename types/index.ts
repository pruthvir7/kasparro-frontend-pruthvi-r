export type SeverityLevel = 'high' | 'medium' | 'low';
export type ModuleStatus = 'excellent' | 'good' | 'warning' | 'critical';
export type TrendType = 'up' | 'down' | 'stable';

export interface Issue {
  severity: SeverityLevel;
  message: string;
  impact: string;
}

export interface AuditModule {
  id: string;
  name: string;
  description: string;
  score: number;
  status: ModuleStatus;
  insights: string[];
  issues: Issue[];
  recommendations: string[];
}

export interface BrandMetrics {
  aiVisibilityScore: number;
  trustScore: number;
  nonBrandedKeywordCoverage: number;
  lastAuditDate: string;
  trend: TrendType;
}

export interface Brand {
  id: string;
  name: string;
  domain: string;
  industry?: string;
  metrics?: BrandMetrics;
}

export interface AuditData {
  modules: AuditModule[];
}

export interface BrandData {
  brands: Brand[];
  currentBrand: Brand;
}

export interface ModuleCardProps {
  module: AuditModule;
  isSelected?: boolean;
  onClick?: () => void;
}
