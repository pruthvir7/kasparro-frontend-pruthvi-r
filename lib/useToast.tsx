'use client';

import { useState, useCallback } from 'react';
import Toast from '@/components/ui/Toast';

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: 'info',
  });

  const showToast = useCallback(
    (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
      setToast({ show: true, message, type });
    },
    []
  );

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, show: false }));
  }, []);

  const ToastComponent = toast.show ? (
    <Toast message={toast.message} type={toast.type} onClose={hideToast} />
  ) : null;

  return { showToast, ToastComponent };
}
