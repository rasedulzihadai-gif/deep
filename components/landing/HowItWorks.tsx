"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Describe",
    description: "Tell DeepThink what you want built, in plain language.",
  },
  {
    number: "02",
    title: "Agent plans & builds",
    description:
      "It breaks the task into steps, writes files, and runs checks — live.",
  },
  {
    number: "03",
    title: "Review & ship",
    description: "Preview the result, download the project, or keep iterating.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center">
          How it works
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center sm:text-left"
            >
              <span className="text-sm font-mono text-accent">{s.number}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
