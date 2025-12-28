'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  
  const isDashboard = pathname?.startsWith('/dashboard') || 
                      pathname?.startsWith('/audit') || 
                      pathname?.startsWith('/architecture');

  if (isDashboard) return null;

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/platform', label: 'Platform' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-primary" />
          <span className="text-xl font-bold text-slate-900">Kasparro</span>
        </Link>

        <nav className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href 
                  ? 'text-primary' 
                  : 'text-slate-600 hover:text-slate-900'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/dashboard">
            <button className="ml-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
              Dashboard
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
