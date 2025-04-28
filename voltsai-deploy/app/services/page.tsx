import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Page Header */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Cutting-edge AI solutions to transform your business and digital presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovative AI Solutions</h2>
            <p className="text-muted-foreground">
              Our team of experts delivers cutting-edge AI services to help your business thrive in the digital age
            </p>
          </div>

          <Tabs defaultValue="influencer" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="influencer">AI-Powered Influencer Creation</TabsTrigger>
              <TabsTrigger value="virtual">Virtual Influencer for Hire</TabsTrigger>
              <TabsTrigger value="marketing">Synthetic Influencer Marketing</TabsTrigger>
            </TabsList>
            <TabsContent value="influencer" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">AI-Powered Influencer Creation</h3>
                  <p className="text-muted-foreground mb-6">
                    Create hyper-realistic virtual influencers tailored to your brand's identity and target audience.
                    Our AI-powered technology generates unique personalities that resonate with your customers and drive
                    engagement.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom personality development based on your brand values</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Photorealistic appearance with unique visual identity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Content generation and social media strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ongoing management and performance analytics</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-muted rounded-xl p-6 aspect-square flex items-center justify-center">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=600&width=600"
                      alt="AI-Powered Influencer Creation"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h4 className="text-xl font-bold">Create Your Virtual Influencer</h4>
                        <p className="text-white/80">Tailored to your brand's unique identity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="virtual" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-muted rounded-xl p-6 aspect-square flex items-center justify-center order-last md:order-first">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=600&width=600"
                      alt="Virtual Influencer for Hire"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h4 className="text-xl font-bold">Hire Our Virtual Influencers</h4>
                        <p className="text-white/80">With established audiences and proven engagement</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Virtual Influencer for Hire</h3>
                  <p className="text-muted-foreground mb-6">
                    Access our roster of established virtual influencers with millions of followers across various
                    niches. Partner with these digital personalities to promote your products and services to engaged
                    audiences.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Access to influencers with millions of followers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Targeted campaigns across multiple platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Customized content creation for your brand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Detailed performance metrics and ROI analysis</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/contact">
                      Hire Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="marketing" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Synthetic Influencer Marketing</h3>
                  <p className="text-muted-foreground mb-6">
                    Leverage our comprehensive synthetic influencer marketing strategies to create campaigns that drive
                    real results. Our end-to-end solution handles everything from influencer selection to content
                    creation and performance analysis.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Strategic campaign planning and execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-channel content distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Real-time engagement and community management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Comprehensive analytics and optimization</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/contact">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-muted rounded-xl p-6 aspect-square flex items-center justify-center">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=600&width=600"
                      alt="Synthetic Influencer Marketing"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h4 className="text-xl font-bold">Full-Service Marketing Campaigns</h4>
                        <p className="text-white/80">End-to-end synthetic influencer strategies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Contact our team today to discuss how our AI-powered influencer solutions can help your business reach new
              heights
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

