'use client';

import { Card } from '@/components/ui/Card';
import { cn, getScoreColor } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number | string;
  trend?: 'up' | 'down' | 'stable';
  suffix?: string;
  className?: string;
}

export default function MetricCard({ title, value, trend, suffix = '', className }: MetricCardProps) {
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  const trendColor = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-slate-400';

  return (
    <Card className={className}>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <p className={cn('mt-4 text-3xl font-bold', typeof value === 'number' && getScoreColor(value))}>
              {value}{suffix}
            </p>
          </div>
          {trend && (
            <div className={cn('rounded-full bg-slate-50 p-2.5', trendColor)}>
              <TrendIcon className="h-5 w-5" />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
