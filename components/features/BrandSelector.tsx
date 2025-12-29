'use client';

import { useState } from 'react';
import { Brand } from '@/types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useDashboardStore } from '@/lib/dashboardStore';
import brandDataImport from '@/data/brands.json';

const brandData = brandDataImport as any;

interface BrandSelectorProps {
  // Remove props - use Zustand directly
}

export default function BrandSelector() {
  const { currentBrandId, setCurrentBrandId } = useDashboardStore();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentBrand = brandData.brands.find((b: Brand) => b.id === currentBrandId) || brandData.brands[0];
  const otherBrands = brandData.brands.filter((b: Brand) => b.id !== currentBrandId);

  const handleSelect = (brand: Brand) => {
    setCurrentBrandId(brand.id);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Button - YOUR ORIGINAL DESIGN */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-md border bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50 group transition-all"
      >
        <div>
          <div className="font-semibold group-hover:text-primary transition-colors">
            {currentBrand?.name}
          </div>
          <div className="text-xs text-slate-600">{currentBrand?.domain}</div>
        </div>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-slate-600" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-600" />
        )}
      </button>

      {/* ✅ DROPDOWN */}
      {isOpen && (
        <div className="absolute right-0 mt-1 w-64 bg-white border border-slate-200 rounded-md shadow-lg z-50 overflow-hidden">
          {otherBrands.map((brand: Brand) => (
            <button
              key={brand.id}
              onClick={() => handleSelect(brand)}
              className="w-full text-left px-4 py-3 text-sm hover:bg-slate-50 hover:text-primary transition-all border-b border-slate-100 last:border-b-0"
            >
              <div className="font-semibold">{brand.name}</div>
              <div className="text-xs text-slate-500">{brand.domain}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
