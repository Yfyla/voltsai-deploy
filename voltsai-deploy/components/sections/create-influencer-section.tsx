"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Sparkles, Wand2, Users, Palette, MessageSquare, BarChart3, CheckCircle2 } from "lucide-react"

export default function CreateInfluencerSection() {
    const [formData, setFormData] = useState({
        brandValues: "",
        targetAudience: "",
        preferredAppearance: "",
        contentPreferences: "",
        socialMediaPlatforms: "",
        analyticsRequirements: "",
        agreeToTerms: false
    })

    const [recommendations, setRecommendations] = useState<string[]>([])
    const [formProgress, setFormProgress] = useState(0)
    const [showRecommendations, setShowRecommendations] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        generateRecommendations()
        setShowRecommendations(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        // Calculate form progress
        const filledFields = Object.values(formData).filter(value =>
            typeof value === 'string' ? value.trim() !== '' : value === true
        ).length
        setFormProgress((filledFields / Object.keys(formData).length) * 100)
    }, [formData])

    const generateRecommendations = () => {
        const newRecommendations: string[] = []

        // Analyze brand values
        if (formData.brandValues.toLowerCase().includes('luxury') ||
            formData.brandValues.toLowerCase().includes('premium')) {
            newRecommendations.push("Consider a sophisticated, elegant AI influencer with a refined aesthetic")
        }

        if (formData.brandValues.toLowerCase().includes('youth') ||
            formData.brandValues.toLowerCase().includes('energetic')) {
            newRecommendations.push("A dynamic, vibrant AI influencer would best represent your brand")
        }

        // Analyze target audience
        if (formData.targetAudience.toLowerCase().includes('millennial') ||
            formData.targetAudience.toLowerCase().includes('gen z')) {
            newRecommendations.push("Focus on short-form video content and trending social media platforms")
        }

        // Analyze content preferences
        if (formData.contentPreferences.toLowerCase().includes('educational') ||
            formData.contentPreferences.toLowerCase().includes('informative')) {
            newRecommendations.push("Incorporate data visualization and expert insights in content strategy")
        }

        setRecommendations(newRecommendations)
    }

    const formFields = [
        {
            id: "brandValues",
            label: "Brand Values & Personality",
            icon: <Sparkles className="h-5 w-5" />,
            placeholder: "Describe your brand values, personality traits, and the type of influencer that would best represent your brand..."
        },
        {
            id: "targetAudience",
            label: "Target Audience",
            icon: <Users className="h-5 w-5" />,
            placeholder: "Describe your target audience demographics, interests, and preferences..."
        },
        {
            id: "preferredAppearance",
            label: "Appearance Preferences",
            icon: <Palette className="h-5 w-5" />,
            placeholder: "Describe the visual style, age range, and appearance characteristics you'd like for your AI influencer..."
        },
        {
            id: "contentPreferences",
            label: "Content Preferences",
            icon: <MessageSquare className="h-5 w-5" />,
            placeholder: "Describe the type of content you'd like your AI influencer to create..."
        },
        {
            id: "socialMediaPlatforms",
            label: "Preferred Social Media Platforms",
            icon: <Wand2 className="h-5 w-5" />,
            placeholder: "Instagram, TikTok, YouTube, etc."
        },
        {
            id: "analyticsRequirements",
            label: "Analytics & Performance Requirements",
            icon: <BarChart3 className="h-5 w-5" />,
            placeholder: "What metrics are important to you? What kind of performance reporting would you like to receive?"
        }
    ]

    return (
        <section id="create-influencer" className="py-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Left side animations */}
                <div className="absolute left-0 top-0 w-1/2 h-full">
                    {/* Floating particles */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={`left-particle-${i}`}
                            className="absolute w-3 h-3 rounded-full bg-primary/60 shadow-[0_0_20px_rgba(var(--primary),0.7)]"
                            style={{
                                left: `${Math.random() * 30}%`,
                                top: `${Math.random() * 100}%`
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.7, 1, 0.7],
                                scale: [1, 1.3, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.15
                            }}
                        />
                    ))}

                    {/* Animated shapes */}
                    <motion.div
                        className="absolute left-1/4 top-1/4 w-16 h-16 rounded-full border-2 border-primary/60 shadow-[0_0_30px_rgba(var(--primary),0.5)]"
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 360],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="absolute left-1/3 bottom-1/3 w-12 h-12 rounded-lg border-2 border-primary/60 shadow-[0_0_30px_rgba(var(--primary),0.5)]"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, -180, -360],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 1
                        }}
                    />
                </div>

                {/* Right side animations */}
                <div className="absolute right-0 top-0 w-1/2 h-full">
                    {/* Floating particles */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={`right-particle-${i}`}
                            className="absolute w-3 h-3 rounded-full bg-primary/60 shadow-[0_0_20px_rgba(var(--primary),0.7)]"
                            style={{
                                right: `${Math.random() * 30}%`,
                                top: `${Math.random() * 100}%`
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.7, 1, 0.7],
                                scale: [1, 1.3, 1],
                                rotate: [0, -180, -360]
                            }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.15
                            }}
                        />
                    ))}

                    {/* Animated shapes */}
                    <motion.div
                        className="absolute right-1/4 top-1/3 w-14 h-14 rounded-lg border-2 border-primary/60 shadow-[0_0_30px_rgba(var(--primary),0.5)]"
                        animate={{
                            scale: [1, 1.25, 1],
                            rotate: [0, 90, 180, 270, 360],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 14,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="absolute right-1/3 bottom-1/4 w-10 h-10 rounded-full border-2 border-primary/60 shadow-[0_0_30px_rgba(var(--primary),0.5)]"
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, -90, -180, -270, -360],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 2
                        }}
                    />
                </div>

                {/* Connecting lines between sides */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {[...Array(7)].map((_, i) => (
                        <motion.path
                            key={`path-${i}`}
                            d={`M${20 + i * 8},${20 + i * 8} L${80 - i * 8},${80 - i * 8}`}
                            stroke="rgba(var(--primary), 0.4)"
                            strokeWidth="1.5"
                            fill="none"
                            filter="url(#glow)"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: i * 0.3
                            }}
                        />
                    ))}
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feFlood floodColor="rgba(var(--primary), 0.3)" result="glowColor" />
                            <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow" />
                            <feMerge>
                                <feMergeNode in="softGlow" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>

                {/* Enhanced floating circles with multiple glow effects */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/30 shadow-[0_0_40px_rgba(var(--primary),0.6)]"
                    animate={{
                        y: [0, -25, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 0.9, 0.7]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-primary/30 shadow-[0_0_40px_rgba(var(--primary),0.6)]"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.15, 1],
                        opacity: [0.6, 0.8, 0.6]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.7
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full bg-primary/30 shadow-[0_0_40px_rgba(var(--primary),0.6)]"
                    animate={{
                        y: [0, -30, 0],
                        scale: [1, 1.25, 1],
                        opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.2
                    }}
                />
            </div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Create Your AI-Powered Influencer
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Tell us about your brand and requirements to create a custom virtual influencer that perfectly matches your needs
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {/* Progress Bar */}
                    <motion.div
                        className="max-w-2xl mx-auto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Form Progress</span>
                            <span className="text-sm font-medium">{Math.round(formProgress)}%</span>
                        </div>
                        <Progress value={formProgress} className="h-2" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Card className="max-w-2xl mx-auto backdrop-blur-sm bg-background/80">
                            <CardHeader>
                                <CardTitle>Influencer Requirements</CardTitle>
                                <CardDescription>
                                    Fill out the form below to help us understand your needs and create the perfect AI influencer for your brand
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {formFields.map((field, index) => (
                                        <motion.div
                                            key={field.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="space-y-2"
                                        >
                                            <Label htmlFor={field.id} className="flex items-center gap-2">
                                                {field.icon}
                                                {field.label}
                                            </Label>
                                            {field.id === "socialMediaPlatforms" ? (
                                                <Input
                                                    id={field.id}
                                                    name={field.id}
                                                    placeholder={field.placeholder}
                                                    value={formData[field.id as keyof typeof formData] as string}
                                                    onChange={handleChange}
                                                />
                                            ) : (
                                                <Textarea
                                                    id={field.id}
                                                    name={field.id}
                                                    placeholder={field.placeholder}
                                                    value={formData[field.id as keyof typeof formData] as string}
                                                    onChange={handleChange}
                                                    className="min-h-[100px]"
                                                />
                                            )}
                                        </motion.div>
                                    ))}

                                    {/* Terms Agreement */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.6 }}
                                        className="flex items-center space-x-2"
                                    >
                                        <Checkbox
                                            id="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                                        />
                                        <Label htmlFor="agreeToTerms" className="text-sm">
                                            I agree to the terms and conditions and understand that this is a request for a custom AI influencer creation service
                                        </Label>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.7 }}
                                    >
                                        <Button type="submit" className="w-full">
                                            Generate Recommendations
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Recommendations Section */}
                    <AnimatePresence>
                        {showRecommendations && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                                className="max-w-2xl mx-auto"
                            >
                                <Card className="backdrop-blur-sm bg-background/80">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <motion.div
                                                animate={{
                                                    rotate: [0, 360],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                            >
                                                <Wand2 className="h-5 w-5" />
                                            </motion.div>
                                            AI Recommendations
                                        </CardTitle>
                                        <CardDescription>
                                            Based on your requirements, here are our recommendations for your AI influencer
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {recommendations.map((recommendation, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    className="flex items-start gap-2"
                                                >
                                                    <motion.div
                                                        animate={{
                                                            scale: [1, 1.1, 1],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    >
                                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                    </motion.div>
                                                    <p className="text-muted-foreground">{recommendation}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
} 