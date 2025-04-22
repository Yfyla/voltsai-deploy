"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CustomersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      text: "The AI-powered influencer creation service from Volts AI has completely transformed our marketing strategy. We've seen a 300% increase in engagement.",
      author: "Sarah Johnson",
      role: "Marketing Director, TechGlobal",
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "SJ",
      rating: 5,
    },
    {
      text: "We've worked with several marketing agencies in the past, but none have delivered the ROI we've seen with Volts AI. Their virtual influencers have helped us reach new audiences.",
      author: "Michael Chen",
      role: "CEO, Innovate Retail",
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "MC",
      rating: 5,
    },
    {
      text: "The synthetic influencer marketing platform from Volts AI has been a game-changer for our brand. We've been able to create consistent, engaging content at a fraction of the cost.",
      author: "Jessica Williams",
      role: "Brand Manager, Fashion Forward",
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "JW",
      rating: 5,
    },
  ]

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
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">Hear from businesses that have transformed with our AI solutions</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="#customers">
              View All Testimonials <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

