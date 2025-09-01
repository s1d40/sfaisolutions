import Link from 'next/link';
import { Logo } from '@/components/icons';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-6 w-6 text-brand" />
          <span className="font-bold text-lg">Cocreator</span>
        </Link>
      </div>
    </header>
  );
}
