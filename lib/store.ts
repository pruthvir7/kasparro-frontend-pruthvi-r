import { create } from 'zustand';
import { Brand, AuditModule } from '@/types';

interface AppState {
  selectedBrand: Brand | null;
  selectedModuleId: string | null;
  setSelectedBrand: (brand: Brand) => void;
  setSelectedModuleId: (moduleId: string) => void;
}

export const useStore = create<AppState>((set) => ({
  selectedBrand: null,
  selectedModuleId: null,
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
  setSelectedModuleId: (moduleId) => set({ selectedModuleId: moduleId }),
}));
