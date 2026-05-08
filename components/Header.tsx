import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="DSE Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-slate hover:text-primary font-display text-[18px] transition-colors">
              About Us
            </Link>
            <Link href="/programs" className="text-slate hover:text-primary font-display text-[18px] transition-colors">
              Programs
            </Link>
            <Link href="/services" className="text-slate hover:text-primary font-display text-[18px] transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="text-slate hover:text-primary font-display text-[18px] transition-colors">
              Pricing
            </Link>
            <Link href="/resources" className="text-slate hover:text-primary font-display text-[18px] transition-colors">
              Resources
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="flex items-center">
            <Link href="/contact">
              <Button iconRight={ArrowRight}>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
