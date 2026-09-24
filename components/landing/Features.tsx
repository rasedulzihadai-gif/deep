"use client";

import { motion } from "framer-motion";
import { Workflow, Hammer, Zap } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Agentic workflows",
    description:
      "Plans and executes multi-step tasks on its own, adjusting course when something breaks.",
  },
  {
    icon: Hammer,
    title: "Build websites & apps instantly",
    description:
      "From a single prompt to a working project — files, structure, and a live preview.",
  },
  {
    icon: Zap,
    title: "Powered by DeepSeek",
    description:
      "Fast, capable reasoning under the hood, with a dedicated mode for harder problems.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Built to finish the job
          </h2>
          <p className="mt-4 text-muted-foreground">
            DeepThink isn&apos;t just a chatbot — it&apos;s an agent that
            reasons about the task, then does the work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
