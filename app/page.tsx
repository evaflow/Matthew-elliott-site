"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ExternalLink, Briefcase, BarChart3, Cpu, PenTool, ShieldCheck } from "lucide-react";import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const competencies = [
  "Health & Benefits Analysis",
  "Quantitative & Statistical Analysis",
  "Financial Modeling",
  "Data Interpretation",
  "Microsoft Excel / PowerPoint / Word",
  "Research & Data Verification",
  "Stakeholder Communication",
  "AI/Data Evaluation",
  "Independent Project Management",
];

const projects = [
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "SkyStarter Creative",
    subtitle: "Independent Digital Venture",
    description:
      "A professional umbrella for digital strategy, creative operations, audience development, emerging technology exploration, and independent project execution.",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "AI & Data Evaluation",
    subtitle: "Research, Quality Review & Categorization",
    description:
      "Hands-on experience evaluating AI-generated content, applying structured guidelines, verifying information, and working across large-scale data tasks.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Digital Strategy & Audience Growth",
    subtitle: "Analytics-Driven Platform Experience",
    description:
      "Built and managed a combined online audience of 45,000+ followers through content strategy, performance analysis, and platform-native communication.",
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    title: "Emerging Technology Exploration",
    subtitle: "Web3, Digital Assets & Creator Ownership",
    description:
      "Explored smart contract concepts, blockchain-based creator distribution, digital ownership frameworks, and emerging online business models.",
  },
];

const timeline = [
  {
    role: "Health & Benefits Analyst",
    org: "Mercer Canada / Marsh McLennan",
    time: "2012",
    detail:
      "Supported analytical work inside a professional Health & Benefits consulting environment, gaining early exposure to client service, compliance standards, and benefits analysis.",
  },
  {
    role: "Founder & Operator",
    org: "SkyStarter Creative",
    time: "2012–Present",
    detail:
      "Built an independent digital venture spanning creative operations, audience development, emerging technology, digital strategy, and self-directed project execution.",
  },
  {
    role: "AI Data Evaluator & Research Analyst",
    org: "DataAnnotation / Appen",
    time: "2025–Present",
    detail:
      "Evaluated AI outputs, conducted research and fact-checking, categorized data, and applied structured guidelines with precision and consistency.",
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
              Analytical professional with an actuarial science foundation, prior Mercer Health & Benefits experience, and a modern background spanning data evaluation, digital strategy, and emerging technology.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/resume/Matthew_Elliott_Marsh_Resume_Premium.pdf" download>
                <Button className="rounded-2xl px-5 py-6 text-base">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-5 py-6 text-base text-white hover:bg-white/10">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button variant="ghost" className="rounded-2xl px-5 py-6 text-base text-neutral-200 hover:bg-white/10">
                <ExternalLink className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
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
            I began my professional path with an Honours Bachelor of Science in Actuarial Science from the University of Western Ontario and early Health & Benefits experience within the Mercer / Marsh McLennan ecosystem.
          </p>
          <p>
            Since then, I have built a broader professional skill set through independent digital business operations, AI/data evaluation work, audience analytics, emerging technology exploration, and communication-intensive project leadership.
          </p>
          <p>
            My goal now is to bring that full combination — quantitative discipline, client-focused communication, technical curiosity, and self-directed execution — back into a structured analytical consulting environment.
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
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Selected Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Proof of initiative, adaptability, and execution.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <Card className="h-full rounded-3xl border-white/10 bg-neutral-900 text-neutral-100 shadow-2xl">
                <CardContent className="p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-neutral-200">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{project.subtitle}</p>
                  <p className="mt-4 leading-7 text-neutral-300">{project.description}</p>
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

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">

            <a href="mailto:matthewaelliott@hotmail.com">
              <Button className="rounded-2xl px-5 py-6">
                <Mail className="mr-2 h-4 w-4" />
                Email Matthew
              </Button>
            </a>

            <a
              href="/resume/Matthew_Elliott_Marsh_Resume_Premium.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="rounded-2xl border-white/20 bg-white/5 px-5 py-6 text-white hover:bg-white/10"
              >
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
