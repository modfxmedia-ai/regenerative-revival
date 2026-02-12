"use client";

import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-cream/80 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-1.5 text-sm text-gray-500 flex-wrap">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-300" />}
              {i === 0 && <Home className="h-3.5 w-3.5 mr-0.5" />}
              {i === allItems.length - 1 ? (
                <span className="text-primary font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="hover:text-primary transition-colors"
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
