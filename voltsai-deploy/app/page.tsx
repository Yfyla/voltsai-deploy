"use client"

import Link from "next/link"
import { Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import CustomersSection from "@/components/sections/customers-section"
import TeamSection from "@/components/sections/team-section"
import CreateInfluencerSection from "@/components/sections/create-influencer-section"
import ContactSection from "@/components/sections/contact-section"
import IndustriesSection from "@/components/sections/industries-section"
import HealthSection from "@/components/sections/health-section"
import AnimatedCounter from "@/components/animated-counter"
import { ThemeToggle } from "@/components/theme-toggle"
import AuthSection from "@/components/sections/auth-section"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Volts AI</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#customers" className="text-sm font-medium hover:text-primary transition-colors">
                Customers
              </Link>
              <Link href="#team" className="text-sm font-medium hover:text-primary transition-colors">
                Our Team
              </Link>
              <Link href="#health" className="text-sm font-medium hover:text-primary transition-colors">
                Health
              </Link>
              <Link href="#industries" className="text-sm font-medium hover:text-primary transition-colors">
                Industries
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById("auth")?.scrollIntoView({ behavior: "smooth" })}
            >
              Sign In
            </Button>
            <Button
              size="sm"
              onClick={() => document.getElementById("auth")?.scrollIntoView({ behavior: "smooth" })}
              className="hidden sm:block"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">
                <AnimatedCounter value={100} duration={2000} />+
              </h3>
              <p className="text-muted-foreground">Global Clients</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">
                <AnimatedCounter value={50} duration={2000} />+
              </h3>
              <p className="text-muted-foreground">Industries Served</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">
                <AnimatedCounter value={3} duration={2000} />+
              </h3>
              <p className="text-muted-foreground">Specialized Services</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">
                <AnimatedCounter value={98} duration={2000} />%
              </h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Team Section */}
      <section id="team">
        <TeamSection />
      </section>

      {/* Create Influencer Section */}
      <section id="create-influencer">
        <CreateInfluencerSection />
      </section>

      {/* Customers Section */}
      <section id="customers">
        <CustomersSection />
      </section>

      {/* Industries Section */}
      <section id="industries">
        <IndustriesSection />
      </section>

      {/* Health Section */}
      <section id="health">
        <HealthSection />
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Pulsing circles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-primary/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full bg-primary/10 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full bg-primary/10 animate-pulse" style={{ animationDelay: '1.5s' }} />

          {/* Animated connecting lines */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="25" y1="25" x2="75" y2="75" stroke="rgba(var(--primary), 0.1)" strokeWidth="0.5" className="animate-draw" />
              <line x1="75" y1="25" x2="25" y2="75" stroke="rgba(var(--primary), 0.1)" strokeWidth="0.5" className="animate-draw" style={{ animationDelay: '0.5s' }} />
              <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(var(--primary), 0.1)" strokeWidth="0.5" className="animate-draw" style={{ animationDelay: '1s' }} />
              <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(var(--primary), 0.1)" strokeWidth="0.5" className="animate-draw" style={{ animationDelay: '1.5s' }} />
            </svg>
          </div>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Global Circuit of Solutions
            </h2>
            <p className="text-muted-foreground">
              Connecting businesses worldwide with cutting-edge AI solutions and expert services
            </p>
          </motion.div>

          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-full h-full max-w-4xl text-primary/10 animate-float" />

              {/* Animated connection points */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />

              {/* Animated connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M25,25 L75,75"
                  stroke="rgba(var(--primary), 0.2)"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.path
                  d="M75,25 L25,75"
                  stroke="rgba(var(--primary), 0.2)"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>

        <style jsx global>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes draw {
            0% { stroke-dasharray: 0, 100; }
            100% { stroke-dasharray: 100, 0; }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-draw {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: draw 2s linear infinite;
          }
        `}</style>
      </section>

      {/* Auth Section */}
      <section id="auth" className="py-20 bg-muted/50">
        <AuthSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="#home" className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Volts AI</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Your Global Circuit of Solutions. Powering businesses with cutting-edge AI and expert services.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#services" className="hover:text-primary transition-colors">
                    AI-Powered Influencer Creation
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-primary transition-colors">
                    Virtual Influencer for Hire
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-primary transition-colors">
                    Synthetic Influencer Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#home" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:text-primary transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Volts AI. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

