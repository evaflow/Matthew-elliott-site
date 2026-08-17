"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, Cpu, Zap, Target, Layers, GitBranch, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stack = [
  "Next.js / React",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
  "Anthropic & OpenAI APIs",
  "Claude Code",
  "Cursor",
  "Prompt design & output testing",
];

const projects = [
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "SkyJourn",
    subtitle: "AI Reflection & Decision Support",
    year: "2025",
    live: "https://skyjournapi-ai.vercel.app",
    problem:
      "Journaling apps capture what happened. They rarely help you decide what to do next. I wanted one surface that could hold both a personal reflection and a structured business decision without the tone collapsing into the same generic voice.",
    build:
      "Three distinct modes — Spirit, SkyJourn and Decision — each with its own system prompt, response structure and guardrails. Decision Mode walks a problem through options, tradeoffs and a recommendation rather than returning free-form advice.",
    detail:
      "The hard part was mode separation. Early versions bled between them: Decision Mode drifted spiritual, Spirit Mode drifted transactional. Fixed by tightening each prompt's role definition and testing the same input across all three modes until the outputs stayed distinct.",
    tags: ["Multi-mode prompting", "Structured output", "Next.js", "Vercel"],
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "SellScript",
    subtitle: "AI Listing Optimizer with Scoring",
    year: "2025",
    live: "https://sellscript.vercel.app",
    problem:
      "Sellers on Etsy, Shopify, Amazon and Facebook rewrite listings blind. They get a new version with no idea what changed or why it should perform better.",
    build:
      "Paste a product description, get an SEO-optimized rewrite plus before-and-after scoring, platform-specific keyword recommendations and annotated explanations for every change made.",
    detail:
      "This is the project closest to my evaluation work. Building the scoring layer meant designing the rubric myself — deciding what dimensions matter, how to weight them, and how to explain a score in language a non-technical seller trusts. Rubric design and rubric application turn out to be the same skill from opposite ends.",
    tags: ["Rubric design", "Scoring & annotation", "SEO", "Multi-platform"],
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "ClosedWon",
    subtitle: "AI Sales Follow-Up Generator",
    year: "2025",
    live: "https://closedwon-ruby.vercel.app",
    problem:
      "Contractors and solo operators lose deals to silence, not rejection. The follow-up never gets written because nobody knows what to say on day three versus day ten.",
    build:
      "Describe a cold lead and receive three personalized follow-up messages, each with a timing recommendation and a short explanation of the psychology it leans on — so the user learns the pattern instead of just copying text.",
    detail:
      "Generating three genuinely different messages was harder than generating one good one. Without explicit constraints the model produced three paraphrases of the same idea. Solved by assigning each message a distinct angle and timing window in the prompt, then comparing outputs side by side until the variation held.",
    tags: ["Paired comparison", "Prompt constraints", "Next.js", "Vercel"],
  },
];

const process = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Scope to one real problem",
    description:
      "Each app started from a problem I had actually watched someone struggle with — not a feature list. That keeps the scope small enough to finish and ship.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Build and test the outputs",
    description:
      "Prompts get iterated against real inputs, with generations compared side by side. Recurring failure modes get written down and designed against, not patched case by case.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Ship it live",
    description:
      "All three are deployed and publicly usable. Nothing here is a demo video or a private repo — click the links and use them.",
  },
];

export default function MatthewElliottPortfolio() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-24 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-neutral-300">
              Portfolio • AI Applications
            </p>
            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Three live AI apps, shipped solo.
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-300 md:text-2xl">
              Designed, built and deployed independently by Matthew Arthur Elliott — from problem statement through production URL. Each one is public and usable right now.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects">
                <Button className="rounded-2xl px-5 py-6 text-base">
                  View the work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <div
                className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-base text-neutral-300 cursor-pointer select-all hover:bg-white/10 transition-colors"
                onClick={() => navigator.clipboard.writeText("matthewaelliott@hotmail.com")}
                title="Click to copy email"
              >
                <Mail className="h-4 w-4 text-neutral-400" />
                matthewaelliott@hotmail.com
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-500">Stack</p>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Selected Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">What each one solves, and how it was built.</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <motion.div key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <Card className="rounded-3xl border-white/10 bg-neutral-900 text-neutral-100 shadow-2xl">
                <CardContent className="p-7 md:p-9">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-neutral-200">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                        <p className="mt-1 text-neutral-400">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-neutral-500">{project.year}</span>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-4 py-5 text-white hover:bg-white/10">
                          Live site <ExternalLink className="ml-2 h-3.5 w-3.5" />
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-7 md:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">The problem</p>
                      <p className="mt-3 leading-7 text-neutral-300">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">What it does</p>
                      <p className="mt-3 leading-7 text-neutral-300">{project.build}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Build note</p>
                      <p className="mt-3 leading-7 text-neutral-300">{project.detail}</p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-neutral-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">How I Build</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Small scope, tested output, shipped.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {process.map((item) => (
              <Card key={item.title} className="h-full rounded-3xl border-white/10 bg-neutral-950 text-neutral-100">
                <CardContent className="flex h-full flex-col p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-neutral-200">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-neutral-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Card className="rounded-[2rem] border-white/10 bg-neutral-900 text-neutral-100 shadow-2xl">
          <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Building, evaluating, available.</h2>
              <p className="mt-4 leading-7 text-neutral-300">
                Open to remote contract work in AI evaluation, applied AI development and product build-out.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div
                className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-base text-neutral-300 cursor-pointer hover:bg-white/10 transition-colors"
                onClick={() => navigator.clipboard.writeText("matthewaelliott@hotmail.com")}
                title="Click to copy"
              >
                <Mail className="h-4 w-4 text-neutral-400 shrink-0" />
                <span className="select-all">matthewaelliott@hotmail.com</span>
                <span className="ml-2 text-xs text-neutral-500">(click to copy)</span>
              </div>
              <a href="/ai">
                <Button variant="outline" className="w-full rounded-2xl border-white/20 bg-white/5 px-5 py-6 text-white hover:bg-white/10">
                  Evaluation profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Matthew Arthur Elliott. Independent AI application development.
      </footer>
    </main>
  );
}
