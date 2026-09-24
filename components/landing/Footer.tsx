import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-accent-foreground">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          DeepThink
        </Link>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
          <Link href="/contact" className="hover:text-foreground">Contact</Link>
          <Link href="https://github.com" className="hover:text-foreground">GitHub</Link>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} DeepThink. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
