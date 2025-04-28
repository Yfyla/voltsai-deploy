"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)]

  const teamMembers = [
    {
      name: "Saad",
      role: "CCIE Certified Network Engineer",
      bio: "Previous Senior Network Engineer in FIFA World Cup 2022, currently working for Qatar Olympics.",
      image: "/photos/ai-pic1.jpg",
      video: "/videos/ai-vid1.mp4",
      initials: "S",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Ali",
      role: "CCIE Certified Network Engineer",
      bio: "Previous Senior Network Engineer in FIFA World Cup 2022, currently working for Qatar Olympics.",
      image: "/photos/ai-pic2.jpg",
      video: "/videos/ai-vid2.mp4",
      initials: "A",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Ahmed",
      role: "AI Solutions Architect",
      bio: "Expert in developing and implementing AI-powered solutions for enterprise clients.",
      image: "/photos/ai-pic3.jpg",
      video: "/videos/ai-vid3.mp4",
      initials: "A",
      linkedin: "#",
      twitter: "#",
    },
  ]

  const handleMouseEnter = (index: number) => {
    setHoveredMember(index)
    if (videoRefs[index].current) {
      videoRefs[index].current.play()
    }
  }

  const handleMouseLeave = (index: number) => {
    setHoveredMember(null)
    if (videoRefs[index].current) {
      videoRefs[index].current.pause()
      videoRefs[index].current.currentTime = 0
    }
  }

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
              onHoverStart={() => handleMouseEnter(index)}
              onHoverEnd={() => handleMouseLeave(index)}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    {/* Photo (always visible) */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`object-cover w-full h-full transition-opacity duration-300 ${
                        hoveredMember === index ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    {/* Video (visible on hover) */}
                    <video
                      ref={videoRefs[index]}
                      src={member.video}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        hoveredMember === index ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ objectPosition: 'top' }}
                      muted
                      loop
                      playsInline
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

