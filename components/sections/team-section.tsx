"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const teamMembers = [
    {
      name: "Saad",
      role: "CCIE Certified Network Engineer",
      bio: "Previous Senior Network Engineer in FIFA World Cup 2022, currently working for Qatar Olympics.",
      image: "/placeholder.svg?height=400&width=400",
      initials: "S",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Ali",
      role: "CCIE Certified Network Engineer",
      bio: "Previous Senior Network Engineer in FIFA World Cup 2022, currently working for Qatar Olympics.",
      image: "/placeholder.svg?height=400&width=400",
      initials: "A",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Ahmed",
      role: "AI Solutions Architect",
      bio: "Expert in developing and implementing AI-powered solutions for enterprise clients.",
      image: "/placeholder.svg?height=400&width=400",
      initials: "A",
      linkedin: "#",
      twitter: "#",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-muted-foreground">
            Industry leaders with extensive experience in AI, networking, and digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
                      style={{
                        transform: hoveredMember === index ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-center space-x-2">
                      <Button size="icon" variant="secondary" asChild>
                        <Link href={member.linkedin}>
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                      <Button size="icon" variant="secondary" asChild>
                        <Link href={member.twitter}>
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" asChild>
            <Link href="#team">View Full Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

