import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded-md bg-slate-200', className)} />
  );
}

export function MetricCardSkeleton() {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="mt-4 h-10 w-20" />
    </div>
  );
}

export function ModuleCardSkeleton() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="mt-2 h-4 w-full" />
        </div>
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  );
}
