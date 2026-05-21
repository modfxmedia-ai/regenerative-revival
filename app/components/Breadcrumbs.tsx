"use client";

import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="bg-[#1A1F30] pt-24 pb-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ol className="flex items-center gap-1.5 text-sm text-white/50 flex-wrap">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/30" />}
              {i === 0 && <Home className="h-3.5 w-3.5 mr-0.5" />}
              {i === allItems.length - 1 ? (
                <span
                  className="text-[#71A7F5] font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
