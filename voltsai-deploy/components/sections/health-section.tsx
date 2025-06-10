"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
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

interface Node {
  x: number;
  y: number;
  size: number;
}

export default function HealthSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [pulsePosition, setPulsePosition] = useState(0)
  const [dnaRotation, setDnaRotation] = useState(0)
  const [nodePositions, setNodePositions] = useState<Node[]>([])

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;
    const fps = 30; // Target 30 FPS
    const frameInterval = 1000 / fps;

    const animate = (time: number) => {
      if (time - lastTime >= frameInterval) {
        setPulsePosition((prev) => (prev + 1) % 100);
        setDnaRotation((prev) => (prev + 0.5) % 360);
        lastTime = time;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Initialize node positions with fewer nodes
    const initialNodes: Node[] = Array.from({ length: 10 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setNodePositions(initialNodes);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Health-related background animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* DNA Helix Animation - Using CSS transform for better performance */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            transform: `rotate(${dnaRotation}deg)`,
            transformOrigin: 'center',
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2">
            <div className="w-full h-0.5 bg-purple-200/20 rounded-full" />
            <div className="w-full h-0.5 bg-purple-200/20 rounded-full mt-4" />
          </div>
        </div>

        {/* Healthcare Network Nodes - Optimized with fewer nodes */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {nodePositions.map((node, i) => (
              <g key={i}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size}
                  fill="rgba(147, 51, 234, 0.2)"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
                {/* Connect only to nearest nodes for better performance */}
                {nodePositions.slice(i + 1, i + 3).map((otherNode, j) => (
                  <line
                    key={`${i}-${j}`}
                    x1={node.x}
                    y1={node.y}
                    x2={otherNode.x}
                    y2={otherNode.y}
                    stroke="rgba(147, 51, 234, 0.1)"
                    strokeWidth="0.2"
                    className="animate-connect"
                    style={{ animationDelay: `${(i + j) * 0.1}s` }}
                  />
                ))}
              </g>
            ))}
          </svg>
        </div>

        {/* Pulse wave animation - Using CSS transform for better performance */}
        <div
          className="absolute w-full h-full"
          style={{
            background: `radial-gradient(circle at ${pulsePosition}% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
            transform: 'translateZ(0)', // Force GPU acceleration
            willChange: 'background-position',
          }}
        />

        {/* ECG line animation - Optimized with CSS transform */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full relative overflow-hidden">
            <div
              className="absolute top-1/2 w-full h-0.5 bg-purple-200/30"
              style={{
                transform: 'translateX(-100%)',
                animation: 'ecg 2s linear infinite',
                willChange: 'transform',
              }}
            />
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-900 tracking-tight">
            Digital Health Solutions
          </h2>
          <p className="text-purple-800/80 text-lg md:text-xl leading-relaxed">
            Transforming healthcare with AI, IoT, and digital innovation for better outcomes, efficiency, and access.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="space-y-2 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-extrabold text-purple-900 drop-shadow-sm">
                {stat.value}
              </div>
              <div className="text-purple-800/80 text-base font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24"
        >
          {healthSolutions.map((sol, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden border-0">
                <div className="p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 shadow-lg animate-pulse">
                    {sol.icon}
                  </div>
                  <h3 className="text-center text-lg font-semibold text-purple-900">{sol.title}</h3>
                </div>
                <div className="px-6 pb-6 text-center text-purple-800/80 text-base">
                  {sol.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 rounded-full mb-20 opacity-60"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Use Cases / Case Studies */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-800">Real-World Impact</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="h-full bg-gradient-to-br from-purple-100 via-white to-purple-50 shadow-lg rounded-3xl p-6 border-0 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-lg text-purple-900 font-semibold mb-4">{uc.title}</h4>
                  <p className="text-purple-800/80 text-base">{uc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="mb-24 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-800">What Healthcare Leaders Say</h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-br from-purple-100 via-white to-purple-50 rounded-3xl shadow-xl p-10 text-center border-0"
            >
              <p className="text-xl italic mb-6 text-purple-900">"{testimonials[testimonialIdx].quote}"</p>
              <div className="font-semibold text-purple-900">{testimonials[testimonialIdx].name}</div>
              <div className="text-purple-800/80 text-base mb-2">{testimonials[testimonialIdx].role}</div>
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${i === testimonialIdx ? "bg-purple-700 border-purple-700 scale-110" : "border-purple-200 bg-white"
                      }`}
                    onClick={() => setTestimonialIdx(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-800">Our Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2 shadow-lg animate-pulse">
                  {tech.icon}
                </div>
                <span className="text-purple-900/80 font-medium">{tech.label}</span>
              </motion.div>
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

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.1; }
        }
        @keyframes ecg {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes connect {
          0% { opacity: 0.1; }
          50% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        .animate-connect {
          animation: connect 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

