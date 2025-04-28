"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
  delay?: number
}

export default function AnimatedCounter({ value, duration = 2000, delay = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timeout = setTimeout(() => {
        let start = 0
        const end = value
        const totalFrames = Math.round(duration / 16)
        const counter = setInterval(() => {
          start = start + end / totalFrames
          if (start > end) {
            setCount(end)
            clearInterval(counter)
            setHasAnimated(true)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [isInView, value, duration, delay, hasAnimated])

  return <span ref={ref}>{count}</span>
}

