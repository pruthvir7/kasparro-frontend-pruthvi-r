import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DashboardState {
  selectedModule: string | null;
  currentBrandId: string;           // ✅ ADD BRAND STATE
  setSelectedModule: (moduleId: string | null) => void;
  setCurrentBrandId: (brandId: string) => void;  // ✅ ADD BRAND ACTION
}

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set) => ({
      selectedModule: null,
      currentBrandId: 'techflow-ai',   // ✅ DEFAULT BRAND
      setSelectedModule: (moduleId) => set({ selectedModule: moduleId }),
      setCurrentBrandId: (brandId) => set({ currentBrandId: brandId }),
    }),
    { name: 'kasparro-dashboard' }
  )
);
