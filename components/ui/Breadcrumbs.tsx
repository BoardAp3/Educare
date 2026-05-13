/** @format */

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-[14px] font-montserrat text-slate/50 py-4">
      <Link href="/" className="hover:text-primary transition-colors">
        <Home size={16} />
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-slate/30">/</span>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate font-medium whitespace-nowrap">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
