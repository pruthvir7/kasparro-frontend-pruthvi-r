'use client';

import { useEffect } from 'react';
import { X, CheckCircle, Info, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type = 'info', onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-600" />,
    info: <Info className="h-5 w-5 text-blue-600" />,
    warning: <AlertCircle className="h-5 w-5 text-yellow-600" />,
    error: <AlertCircle className="h-5 w-5 text-red-600" />,
  };

  const styles = {
    success: 'bg-green-50 border-green-200 text-green-900',
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    error: 'bg-red-50 border-red-200 text-red-900',
  };

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 z-50 flex max-w-md items-center gap-3 rounded-lg border p-4 shadow-lg',
        styles[type]
      )}
    >
      {icons[type]}
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="rounded-md p-1 transition-colors hover:bg-black/5"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
