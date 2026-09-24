"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-accent-soft to-transparent"
        aria-hidden
      />

      <div className="container flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          Powered by DeepSeek
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Your AI agent that thinks, then builds.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-xl text-balance text-lg text-muted-foreground"
        >
          Tell it once, it finishes the job. DeepThink plans, writes code, and
          ships working websites, apps, and scripts — without the
          micromanagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/signup">
              Start Building Free <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#how-it-works">
              <Play className="h-4 w-4" /> See how it works
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 w-full max-w-5xl"
        >
          <ProductMockup />
        </motion.div>
      </div>
    </section>
  );
}

function ProductMockup() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-accent/5 overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
      </div>
      <div className="grid grid-cols-[220px_1fr_1fr] h-[380px] text-left text-sm">
        <div className="hidden sm:block border-r border-border p-4 space-y-2 bg-muted/40">
          <div className="h-8 rounded-lg bg-accent-soft" />
          <div className="h-3 w-3/4 rounded bg-border mt-4" />
          <div className="h-3 w-2/3 rounded bg-border" />
          <div className="h-3 w-3/4 rounded bg-border" />
        </div>
        <div className="p-5 space-y-3 col-span-2 sm:col-span-1">
          <div className="ml-auto h-8 w-2/3 rounded-2xl bg-accent-soft" />
          <div className="space-y-1.5">
            <div className="h-2.5 w-5/6 rounded bg-border" />
            <div className="h-2.5 w-2/3 rounded bg-border" />
            <div className="mt-2 h-16 w-full rounded-lg bg-muted/60 border border-border" />
          </div>
        </div>
        <div className="hidden sm:block border-l border-border p-4 bg-muted/30">
          <div className="h-full rounded-lg bg-background border border-border" />
        </div>
      </div>
    </div>
  );
}
