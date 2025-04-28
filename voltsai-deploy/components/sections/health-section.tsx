"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, FileText, HeartPulse, LineChart, Stethoscope, ShieldCheck, Smartphone, Cloud, Cpu, UserCheck, Hospital, Activity, MessageCircle, Lock, MonitorSmartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const healthSolutions = [
  {
    icon: <Stethoscope className="h-6 w-6 text-primary" />, title: "Telemedicine & Virtual Care", desc: "Connect patients and providers remotely for consultations, follow-ups, and urgent care with secure, high-quality video and chat.",
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6 text-primary" />, title: "Remote Patient Monitoring", desc: "Track patient vitals and chronic conditions in real-time using IoT devices and AI-powered alerts.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-primary" />, title: "AI Diagnostics & Decision Support", desc: "Leverage AI to assist clinicians in diagnosis, triage, and treatment planning for faster, more accurate care.",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-primary" />, title: "Patient Engagement & Mobile Apps", desc: "Empower patients with mobile apps for appointments, medication reminders, health tracking, and education.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: "Data Security & Compliance", desc: "Ensure HIPAA/GDPR compliance and robust cybersecurity for all digital health data and communications.",
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />, title: "Health Financing & Cost Efficiency", desc: "Streamline claims, optimize spending, and ensure sustainable funding with digital solutions.",
  },
  {
    icon: <HeartPulse className="h-6 w-6 text-primary" />, title: "Connected & Optimized Health System", desc: "Automate healthcare ecosystems with EMRs, telemedicine, and AI-powered solutions for efficiency.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-primary" />, title: "Data-Driven Health Outcomes", desc: "Use analytics to track trends, shape policies, and improve patient outcomes with big data and AI.",
  },
]

const stats = [
  { label: "Patients Served", value: "1M+" },
  { label: "Hospitals Onboarded", value: "500+" },
  { label: "AI Diagnoses Delivered", value: "250K+" },
  { label: "Avg. Cost Reduction", value: "30%" },
  { label: "Patient Satisfaction", value: "98%" },
]

const useCases = [
  {
    title: "Rural Telemedicine Expansion",
    desc: "Enabled remote villages to access specialist care via virtual consultations, reducing travel and improving outcomes.",
  },
  {
    title: "Chronic Disease Monitoring",
    desc: "Deployed IoT devices for real-time monitoring of diabetes and hypertension, leading to 40% fewer hospitalizations.",
  },
  {
    title: "AI-Powered Radiology",
    desc: "Implemented AI diagnostics for X-rays and MRIs, increasing accuracy and reducing reporting time by 60%.",
  },
]

const testimonials = [
  {
    quote: "Volts AI's telemedicine platform transformed our rural outreach. Patient care is now faster and more accessible than ever.",
    name: "Dr. Sarah Lee",
    role: "Chief Medical Officer, HealthReach",
  },
  {
    quote: "The AI diagnostics solution reduced our radiology backlog and improved diagnostic confidence across the board.",
    name: "Dr. Michael Chen",
    role: "Head of Radiology, Metro Hospital",
  },
  {
    quote: "Our patients love the mobile engagement app. Medication adherence and appointment attendance are at all-time highs!",
    name: "Nurse Priya Singh",
    role: "Patient Care Coordinator, City Clinic",
  },
]

const techStack = [
  { icon: <Cpu className="h-8 w-8 text-primary" />, label: "AI & ML" },
  { icon: <Cloud className="h-8 w-8 text-primary" />, label: "Cloud" },
  { icon: <Activity className="h-8 w-8 text-primary" />, label: "IoT" },
  { icon: <Lock className="h-8 w-8 text-primary" />, label: "Blockchain" },
  { icon: <MessageCircle className="h-8 w-8 text-primary" />, label: "Telemedicine" },
  { icon: <LineChart className="h-8 w-8 text-primary" />, label: "Analytics" },
  { icon: <UserCheck className="h-8 w-8 text-primary" />, label: "Patient Engagement" },
  { icon: <Hospital className="h-8 w-8 text-primary" />, label: "EMR/EHR" },
]

export default function HealthSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 tracking-tight">Digital Health Solutions</h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Transforming healthcare with AI, IoT, and digital innovation for better outcomes, efficiency, and access.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 bg-white/80 rounded-xl shadow p-6">
              <div className="text-4xl font-extrabold text-blue-700 drop-shadow-sm">{stat.value}</div>
              <div className="text-muted-foreground text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Solutions Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24"
        >
          {healthSolutions.map((sol, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="flex flex-col h-full shadow-lg hover:shadow-2xl transition-shadow rounded-2xl bg-white/90 border-0">
                <CardHeader className="pb-2 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-4 shadow">
                    {sol.icon}
                </div>
                  <CardTitle className="text-center text-lg font-semibold text-blue-900">{sol.title}</CardTitle>
              </CardHeader>
                <CardContent className="flex-grow text-center text-muted-foreground text-base px-2 pb-6">
                  {sol.desc}
              </CardContent>
            </Card>
          </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full mb-20 opacity-60" />

        {/* Use Cases / Case Studies */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-800">Real-World Impact</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {useCases.map((uc, i) => (
              <Card key={i} className="h-full bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-lg rounded-2xl border-0">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900 font-semibold">{uc.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-base">{uc.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="mb-24 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-800">What Healthcare Leaders Say</h3>
          <div className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl shadow-xl p-10 text-center border-0">
            <p className="text-xl italic mb-6 text-blue-900">“{testimonials[testimonialIdx].quote}”</p>
            <div className="font-semibold text-blue-900">{testimonials[testimonialIdx].name}</div>
            <div className="text-muted-foreground text-base mb-2">{testimonials[testimonialIdx].role}</div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${i === testimonialIdx ? "bg-blue-700 border-blue-700 scale-110" : "border-blue-200 bg-white"}`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {techStack.map((tech, i) => (
              <div key={i} className="flex flex-col items-center">
                {tech.icon}
                <span className="mt-3 text-base text-muted-foreground font-medium">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" className="px-8 py-4 text-lg font-semibold rounded-xl shadow-md" asChild>
            <Link href="#contact">
              Request Health Solutions Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

