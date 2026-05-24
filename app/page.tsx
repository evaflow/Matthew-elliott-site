"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ExternalLink, BarChart3, Cpu, PenTool, ShieldCheck, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const competencies = [
  "Health & Benefits Analysis",
  "Medical & Pharmacy Cost Modeling",
  "Policy & Plan Review",
  "Benefits Reporting",
  "Financial Modeling",
  "Pricing Model Support",
  "Microsoft Excel / PowerPoint / R",
  "AI Tool Development & Deployment",
  "Research & Data Verification",
  "Stakeholder Communication",
  "Analytical Tool Development",
  "Independent Project Management",
];

const projects = [
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "SkyJourn",
    subtitle: "AI Mindfulness & Decision Support App",
    description:
      "A three-mode AI-powered application for personal reflection, guided journaling and structured business decision analysis. Spirit Mode, SkyJourn Mode and Decision Mode — from personal peace to business clarity.",
    link: "https://skyjournapi-ai.vercel.app",
    linkLabel: "Try SkyJourn →",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "SellScript",
    subtitle: "AI E-commerce Listing Optimizer",
    description:
      "Paste a product description and receive an SEO-optimized, emotionally compelling rewrite instantly — with before-and-after scoring, platform-specific keywords for Etsy, Shopify, Amazon and Facebook, and annotated explanations.",
    link: "https://sellscript.vercel.app",
    linkLabel: "Try SellScript →",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "ClosedWon",
    subtitle: "AI Sales Follow-Up Generator",
    description:
      "Describe a cold lead and receive three personalized follow-up messages with timing recommendations and the psychology behind each approach. Built for contractors, service businesses and solo entrepreneurs.",
    link: "https://closedwon-ruby.vercel.app",
    linkLabel: "Try ClosedWon →",
  },

];

const timeline = [
  {
    role: "Health & Benefits Analyst",
    org: "Mercer Canada / Marsh McLennan",
    time: "2012",
    detail:
      "Supported analytical work inside a professional Health & Benefits consulting environment — reviewing benefit plan documents, identifying policy discrepancies, compiling Excel reporting models and communicating benefit plan updates within a 4–6 person consulting team.",
  },
  {
    role: "Founder, Operator & Developer",
    org: "SkyStarter Creative",
    time: "2012–Present",
    detail:
      "Built an independent digital venture spanning creative operations, audience development and emerging technology. Independently designed, developed and deployed four live AI-powered web applications using Claude Code, Cursor and modern development tools — full-cycle execution from concept through production.",
  },
  {
    role: "AI Data Evaluator & Research Analyst",
    org: "DataAnnotation / Appen",
    time: "2025–Present",
    detail:
      "Evaluated AI-generated content for logical consistency, factual accuracy and compliance with structured analytical guidelines. Conducted multi-source research, verified data integrity and completed business categorization projects maintaining high accuracy standards.",
  },
];

export default function MatthewElliottProfessionalSite() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-24 md:py-32">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-neutral-300">
              Fayetteville, NC • Open to Raleigh–Durham Relocation
            </p>
            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Matthew Arthur Elliott
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-300 md:text-2xl">
              Actuarial Science graduate, Mercer Health & Benefits alumnus, and independent AI tool builder with a modern background spanning data evaluation, digital strategy and emerging technology.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/resume/Matthew_Elliott_Marsh_Resume_FINAL.pdf" download>
                <Button className="rounded-2xl px-5 py-6 text-base">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
              <a href="/resume/Matthew_Elliott_Marsh_Resume_FINAL.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full rounded-2xl border-white/20 bg-white/5 px-5 py-6 text-white hover:bg-white/10">
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <div
                className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-base text-neutral-300 cursor-pointer select-all hover:bg-white/10 transition-colors"
                onClick={() => navigator.clipboard.writeText('matthewaelliott@hotmail.com')}
                title="Click to copy email"
              >
                <Mail className="h-4 w-4 text-neutral-400" />
                matthewaelliott@hotmail.com
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1fr_1.3fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Professional Positioning</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Analytical rigor with entrepreneurial range.</h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-5 text-lg leading-8 text-neutral-300">
          <p>
            I began my professional path with an Honours Bachelor of Science in Actuarial Science from the University of Western Ontario and early Health & Benefits experience within the Mercer / Marsh McLennan ecosystem — reviewing benefit plan documents, identifying policy discrepancies and supporting client-facing reporting.
          </p>
          <p>
            Since then, I have independently designed and deployed four live AI-powered applications, built a 45,000+ combined audience across digital platforms, and developed deep experience in AI data evaluation and analytical review work.
          </p>
          <p>
            My goal now is to bring that full combination — quantitative discipline, client-focused communication, technical initiative and self-directed execution — back into a structured analytical consulting environment.
          </p>
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Core Competencies</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Relevant strengths at a glance.</h2>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {competencies.map((item) => (
              <Card key={item} className="rounded-2xl border-white/10 bg-neutral-900/80 text-neutral-100 shadow-xl">
                <CardContent className="flex items-center gap-3 p-5">
                  <ShieldCheck className="h-4 w-4 text-neutral-400" />
                  <span className="text-sm md:text-base">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">AI Tools & Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Built by a builder, for builders.</h2>
          <p className="mt-4 text-lg leading-7 text-neutral-400">Four live AI-powered applications — independently designed, developed and deployed.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <motion.div key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <Card className="h-full rounded-3xl border-white/10 bg-neutral-900 text-neutral-100 shadow-2xl">
                <CardContent className="flex h-full flex-col p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-neutral-200">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{project.subtitle}</p>
                  <p className="mt-4 flex-1 leading-7 text-neutral-300">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                      {project.linkLabel} <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Timeline</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A nonlinear path with a clear professional throughline.</h2>
          <div className="mt-10 space-y-5">
            {timeline.map((item) => (
              <Card key={`${item.role}-${item.time}`} className="rounded-3xl border-white/10 bg-neutral-950 text-neutral-100">
                <CardContent className="grid gap-4 p-6 md:grid-cols-[160px_1fr]">
                  <div className="text-sm font-medium text-neutral-500">{item.time}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-neutral-400">{item.org}</p>
                    <p className="mt-4 leading-7 text-neutral-300">{item.detail}</p>
                  </div>
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
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Available for analytical, benefits, and consulting-focused opportunities.</h2>
              <p className="mt-4 leading-7 text-neutral-300">
                Open to relocation within the Raleigh–Durham area for the right professional opportunity.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div
                className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-base text-neutral-300 cursor-pointer hover:bg-white/10 transition-colors"
                onClick={() => navigator.clipboard.writeText('matthewaelliott@hotmail.com')}
                title="Click to copy"
              >
                <Mail className="h-4 w-4 text-neutral-400 shrink-0" />
                <span className="select-all">matthewaelliott@hotmail.com</span>
                <span className="ml-2 text-xs text-neutral-500">(click to copy)</span>
              </div>
              <a href="/resume/Matthew_Elliott_Marsh_Resume_FINAL.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full rounded-2xl border-white/20 bg-white/5 px-5 py-6 text-white hover:bg-white/10">
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Matthew Arthur Elliott. Built as a professional portfolio and career narrative hub.
      </footer>
    </main>
  );
}