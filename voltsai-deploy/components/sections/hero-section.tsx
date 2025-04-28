"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-20">
        <div className="container">
          <div className="h-[600px] flex items-center justify-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Global Circuit of <span className="text-primary">AI-Powered Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Transforming businesses worldwide with cutting-edge AI technology and expert services
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
              {/* Electric Frequency SVG Animation */}
              <svg
                width="320"
                height="320"
                viewBox="0 0 320 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="z-10"
              >
                <defs>
                  <linearGradient id="electric-gradient" x1="0" y1="0" x2="320" y2="320" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FACC15" className="[stop-color:theme(colors.yellow.400)] dark:[stop-color:theme(colors.yellow.300)]" />
                    <stop offset="1" stopColor="#F59E42" className="[stop-color:theme(colors.yellow.500)] dark:[stop-color:theme(colors.yellow.200)]" />
                  </linearGradient>
                  <filter id="glow-electric" x="-40" y="-40" width="400" height="400">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Animated frequency line */}
                <path
                  d="M 40 160 Q 80 80, 120 160 Q 160 240, 200 160 Q 240 80, 280 160"
                  stroke="url(#electric-gradient)"
                  strokeWidth="6"
                  fill="none"
                  filter="url(#glow-electric)"
                >
                  <animate
                    attributeName="d"
                    dur="2s"
                    repeatCount="indefinite"
                    values="M 40 160 Q 80 80, 120 160 Q 160 240, 200 160 Q 240 80, 280 160;
                            M 40 160 Q 80 240, 120 160 Q 160 80, 200 160 Q 240 240, 280 160;
                            M 40 160 Q 80 80, 120 160 Q 160 240, 200 160 Q 240 80, 280 160"
                  />
                </path>
              </svg>
              {/* Revolving Letters */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[320px] h-[320px]">
                  {[...'VOLTS AI'].map((char, i, arr) => {
                    const angle = (i / arr.length) * 2 * Math.PI;
                    const radius = 140;
                    const x = 160 + radius * Math.cos(angle);
                    const y = 160 + radius * Math.sin(angle);
                    return (
                      <span
                        key={char + i}
                        className="absolute text-2xl md:text-3xl font-extrabold tracking-widest select-none animate-revolve-letter
                          text-yellow-500 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]
                          dark:text-yellow-300 dark:drop-shadow-[0_0_12px_rgba(253,224,71,0.8)]"
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                          transform: 'translate(-50%, -50%)',
                          animationDelay: `${i * 0.2}s`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Remove boxy background, keep only subtle glows */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-100 dark:bg-yellow-900 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-100 dark:bg-yellow-900 rounded-full blur-2xl opacity-60"></div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  )
}

/* Add these to your global CSS or Tailwind config:
@keyframes revolve-letter {
  0% { transform: rotate(0deg) translateY(-140px) rotate(0deg); }
  100% { transform: rotate(360deg) translateY(-140px) rotate(-360deg); }
}
.animate-revolve-letter {
  animation: revolve-letter 6s linear infinite;
}
*/

