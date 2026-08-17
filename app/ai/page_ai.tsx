"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  ScanText,
  Image as ImageIcon,
  ClipboardCheck,
  ShieldCheck,
  Scale,
  AlertTriangle,
  Cpu,
  Zap,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const competencies = [
  "Model Output Evaluation",
  "Rubric-Based Annotation",
  "Severity & Policy Tagging",
  "Paired Response Comparison",
  "Inter-Rater Calibration",
  "Hallucination Detection",
  "Instruction-Following Analysis",
  "Visual Document Understanding",
  "Image Reasoning Evaluation",
  "Structured Written Rationale",
  "Batch Auditing & Drift Reporting",
  "Failure-Mode Documentation",
];

const practice = [
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Paired Comparison",
    description:
      "Judge two model responses against the same prompt, select the stronger output, and write a rationale that names the specific rubric clause driving the decision — not a vague preference.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Severity & Safety Tagging",
    description:
      "Label hallucinations, instruction-following failures, unsafe content and policy violations with structured tags and consistent severity levels across long batches.",
  },
  {
    icon: <ScanText className="h-5 w-5" />,
    title: "Document & Visual Review",
    description:
      "Apply multi-page rubrics to document annotation and image reasoning tasks — verifying that text, layout, diagrams and visual elements actually support the claimed answer.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Calibration & Escalation",
    description:
      "Calibrate against gold-standard examples, audit batches for rubric drift, and route ambiguous prompts back to the program team when the prompt itself is the defect.",
  },
];

const projects = [
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "SkyJourn",
    subtitle: "AI Reflection & Decision Support App",
    description:
      "Three-mode AI application built and iterated through structured output testing — prompts refined by evaluating generated responses for usefulness, consistency and instruction-following.",
    link: "https://skyjournapi-ai.vercel.app",
    linkLabel: "Try SkyJourn →",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "SellScript",
    subtitle: "AI Listing Optimizer with Scoring",
    description:
      "Rewrites product listings and returns before-and-after scoring with annotated explanations — a working example of rubric-style scoring applied to generated content.",
    link: "https://sellscript.vercel.app",
    linkLabel: "Try SellScript →",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "ClosedWon",
    subtitle: "AI Sales Follow-Up Generator",
    description:
      "Generates three personalized follow-ups with timing logic and the reasoning behind each — built and tuned by comparing candidate outputs side by side.",
    link: "https://closedwon-ruby.vercel.app",
    linkLabel: "Try ClosedWon →",
  },
];

const timeline = [
  {
    role: "AI Data Evaluator & Research Analyst",
    org: "TELUS Digital AI / Appen / DataAnnotation",
    time: "2025–Present",
    detail:
      "Evaluate AI-generated responses against versioned guidelines for logical consistency, factual accuracy, relevance and instruction-following. Current work includes a human-editing trajectory collection program — editing and judging reference documents against reference, description and inference instructions, and rating instruction clarity itself. Identify hallucinations, unsupported conclusions and reasoning gaps, then document them in structured, evidence-based feedback. Conduct multi-source research to verify claims and separate accurate information from plausible-sounding error.",
  },
  {
    role: "Founder, Operator & AI Tool Developer",
    org: "SkyStarter Creative",
    time: "2016–Present",
    detail:
      "Independently designed, tested and deployed four live AI-powered web applications using Claude Code, Cursor and ChatGPT. Refined prompts and workflows through iterative output evaluation — comparing generations, scoring quality and documenting recurring failure modes. Day-to-day exposure to how models fail sharpens the review work.",
  },
  {
    role: "Health & Benefits Analyst",
    org: "Mercer Canada / Marsh McLennan",
    time: "2012",
    detail:
      "Reviewed and cross-referenced employee benefit policy documents and handbook editions against prior-year versions, identifying discrepancies and material changes for consultant review — line-by-line document comparison under a professional compliance and confidentiality framework.",
  },
];

export default function MatthewElliottAIEvaluationSite() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-24 md:py-32">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-neutral-300">
              AI Evaluation • Rubric Review • Visual & Document Understanding
            </p>
            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Matthew Arthur Elliott
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-300 md:text-2xl">
              AI data evaluator and human rater with an Actuarial Science background — reviewing model outputs against versioned rubrics, tagging failure modes with severity, and writing the structured rationale a modeling team can actually train on.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/resume/Matthew_Elliott_AI_Evaluation_Resume.pdf" download>
                <Button className="rounded-2xl px-5 py-6 text-base">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
              <a href="/resume/Matthew_Elliott_AI_Evaluation_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full rounded-2xl border-white/20 bg-white/5 px-5 py-6 text-white hover:bg-white/10">
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
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
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400">
              <span>Remote — US authorized</span>
              <span>•</span>
              <span>Available 20+ hrs / week, async</span>
              <span>•</span>
              <span>Fayetteville, NC</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1fr_1.3fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Positioning</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Quantitative rigor applied to human evaluation.</h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-5 text-lg leading-8 text-neutral-300">
          <p>
            I evaluate AI-generated content for a living. Across TELUS Digital AI, Appen and DataAnnotation I apply multi-page guidelines to long batches of model output — comparing paired responses, flagging hallucinations and instruction-following failures, and writing rationale that points to the specific rubric clause rather than to taste.
          </p>
          <p>
            The habit comes from an Honours BSc in Actuarial Science and SOA Exams P and FM: check the assumption, verify the work, and be able to defend the conclusion step by step. Document review is familiar ground — my first analyst role at Mercer was cross-referencing benefit policy documents line by line to surface discrepancies between editions.
          </p>
          <p>
            I also build with these models. Four live AI applications, shipped independently, mean I have seen how outputs fail in production — which makes the failure modes easier to name, categorize and escalate as regression cases.
          </p>
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Core Competencies</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Evaluation strengths at a glance.</h2>
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
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">How I Review</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A repeatable method, not a gut reaction.</h2>
          <p className="mt-4 text-lg leading-7 text-neutral-400">
            Consistency across a 50-row batch matters more than brilliance on any single item.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {practice.map((item) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <Card className="h-full rounded-3xl border-white/10 bg-neutral-900 text-neutral-100 shadow-2xl">
                <CardContent className="flex h-full flex-col p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-neutral-200">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-neutral-300">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Built With AI</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Three live applications, shipped solo.</h2>
            <p className="mt-4 text-lg leading-7 text-neutral-400">
              Building with these models is what makes their failure modes recognizable.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <motion.div key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
                <Card className="h-full rounded-3xl border-white/10 bg-neutral-950 text-neutral-100 shadow-2xl">
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Evaluation, building and document review.</h2>
        <div className="mt-10 space-y-5">
          {timeline.map((item) => (
            <Card key={`${item.role}-${item.time}`} className="rounded-3xl border-white/10 bg-neutral-900 text-neutral-100">
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
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Credentials</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Education & setup.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="rounded-2xl border-white/10 bg-neutral-950 text-neutral-100">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <ImageIcon className="h-4 w-4 text-neutral-300" />
                  </div>
                  <h3 className="text-lg font-semibold">Honours BSc, Actuarial Science</h3>
                  <p className="mt-2 leading-7 text-neutral-400">
                    University of Western Ontario, 2011. Probability, regression, time series, loss models and survival analysis.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-white/10 bg-neutral-950 text-neutral-100">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <ClipboardCheck className="h-4 w-4 text-neutral-300" />
                  </div>
                  <h3 className="text-lg font-semibold">SOA Exams P & FM</h3>
                  <p className="mt-2 leading-7 text-neutral-400">
                    Society of Actuaries Probability and Financial Mathematics — both passed.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-white/10 bg-neutral-950 text-neutral-100 sm:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">Remote work setup</h3>
                  <p className="mt-2 leading-7 text-neutral-400">
                    Native English speaker. Dedicated home workspace, high-speed internet, desktop and mobile test devices. Reliable async availability well beyond a 10-hour weekly minimum, US work authorized.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Card className="rounded-[2rem] border-white/10 bg-neutral-900 text-neutral-100 shadow-2xl">
          <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Available for AI evaluation and human-rater contract work.</h2>
              <p className="mt-4 leading-7 text-neutral-300">
                Available as an independent specialist contractor for remote programs across document understanding, image reasoning, safety review and rubric-based annotation.
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
              <a href="/resume/Matthew_Elliott_AI_Evaluation_Resume.pdf" target="_blank" rel="noopener noreferrer">
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
        © {new Date().getFullYear()} Matthew Arthur Elliott. AI evaluation, rubric review and applied quality assurance.
      </footer>
    </main>
  );
}
