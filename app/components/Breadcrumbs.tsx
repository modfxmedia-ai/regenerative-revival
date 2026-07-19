"use client";

/**
 * Breadcrumb - visual component intentionally hidden.
 * JSON-LD BreadcrumbList schema is emitted on every page for SEO.
 * The visual breadcrumb caused layout conflicts with dark hero sections
 * across 20+ pages. Schema-only approach is cleaner and sufficient.
 */
export default function Breadcrumbs(_props: { items: { label: string; href: string }[] }) {
  return null;
}
