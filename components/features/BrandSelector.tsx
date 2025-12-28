'use client';

import { Brand } from '@/types';
import { ChevronDown } from 'lucide-react';

interface BrandSelectorProps {
  brands: Brand[];
  currentBrand: Brand;
  onSelect: (brand: Brand) => void;
}

export default function BrandSelector({ brands, currentBrand, onSelect }: BrandSelectorProps) {
  return (
    <div className="relative inline-block">
      <button className="flex items-center space-x-2 rounded-md border bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50">
        <div>
          <div className="font-semibold">{currentBrand.name}</div>
          <div className="text-xs text-slate-600">{currentBrand.domain}</div>
        </div>
        <ChevronDown className="h-4 w-4 text-slate-600" />
      </button>
    </div>
  );
}
