"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "AI-Powered Influencer Creation",
      description: "Create hyper-realistic virtual influencers tailored to your brand's identity and target audience.",
      features: [
        "Custom personality development based on your brand values",
        "Photorealistic appearance with unique visual identity",
        "Content generation and social media strategy",
        "Ongoing management and performance analytics",
      ],
      cta: "Learn More",
    },
    {
      title: "Virtual Influencer for Hire",
      description:
        "Access our roster of established virtual influencers with millions of followers across various niches.",
      features: [
        "Access to influencers with millions of followers",
        "Targeted campaigns across multiple platforms",
        "Customized content creation for your brand",
        "Detailed performance metrics and ROI analysis",
      ],
      cta: "Hire Now",
    },
    {
      title: "Synthetic Influencer Marketing",
      description:
        "Leverage our comprehensive synthetic influencer marketing strategies to create campaigns that drive real results.",
      features: [
        "Strategic campaign planning and execution",
        "Multi-channel content distribution",
        "Real-time engagement and community management",
        "Comprehensive analytics and optimization",
      ],
      cta: "Get Started",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Cutting-edge AI solutions to transform your business and digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card
                className={`h-full flex flex-col cursor-pointer transition-all ${
                  activeService === index ? "border-primary shadow-lg" : ""
                }`}
                onClick={() => setActiveService(index)}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                      activeService === index ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check
                          className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                            activeService === index ? "text-primary" : "text-muted-foreground"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={activeService === index ? "default" : "outline"} asChild>
                    <Link href="#services">
                      {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="#services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

