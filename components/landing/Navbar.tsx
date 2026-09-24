"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          DeepThink
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link href="#features" className="hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-foreground transition-colors">
            How it works
          </Link>
          <Link href="#pricing" className="hover:text-foreground transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Start Building</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
