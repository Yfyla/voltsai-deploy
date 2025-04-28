import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FC } from "react"

const CustomersPage: FC = () => {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Page Header */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Customers</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how businesses worldwide are achieving success with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#testimonials">Testimonials</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#case-studies">Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Customers Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground">
              Join the growing list of companies transforming their businesses with our solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <img src="/placeholder.svg?height=80&width=160" alt="Company Logo 1" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <img src="/placeholder.svg?height=80&width=160" alt="Company Logo 2" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <img src="/placeholder.svg?height=80&width=160" alt="Company Logo 3" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <img src="/placeholder.svg?height=80&width=160" alt="Company Logo 4" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <img src="/placeholder.svg?height=80&width=160" alt="Company Logo 5" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <img src="/placeholder.svg?height=80&width=160" alt="Company Logo 6" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <img src="/placeholder.svg?height=80&width=160" alt="Company Logo 7" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <img src="/placeholder.svg?height=80&width=160" alt="Company Logo 8" className="max-h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">
              Real feedback from businesses that have transformed with our AI solutions
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 max-w-md mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              <TabsTrigger value="smb">Small Business</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Transformed Our Marketing Strategy</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "The AI-powered influencer creation service from Volts AI has completely transformed our marketing
                      strategy. We've seen a 300% increase in engagement and a significant boost in conversion rates."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Marketing Director, TechGlobal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Exceptional ROI</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "We've worked with several marketing agencies in the past, but none have delivered the ROI we've
                      seen with Volts AI. Their virtual influencers have helped us reach new audiences we couldn't
                      access before."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael Chen" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">CEO, Innovate Retail</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Game-Changing Technology</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "The synthetic influencer marketing platform from Volts AI has been a game-changer for our brand.
                      We've been able to create consistent, engaging content that resonates with our audience at a
                      fraction of the cost."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jessica Williams" />
                        <AvatarFallback>JW</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Jessica Williams</p>
                        <p className="text-sm text-muted-foreground">Brand Manager, Fashion Forward</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Outstanding Support</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "Not only is the technology impressive, but the support team at Volts AI has been exceptional.
                      They've been responsive, helpful, and have gone above and beyond to ensure our success."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="David Rodriguez" />
                        <AvatarFallback>DR</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">David Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Operations Manager, Global Solutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Innovative Solutions</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "Volts AI has provided us with innovative solutions that have helped us stay ahead of our
                      competition. Their AI-powered influencers have become an integral part of our marketing strategy."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emma Thompson" />
                        <AvatarFallback>ET</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Emma Thompson</p>
                        <p className="text-sm text-muted-foreground">Digital Strategy Director, NextGen Media</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Exceeded Expectations</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "The results we've achieved with Volts AI have far exceeded our expectations. Their team's
                      expertise and cutting-edge technology have delivered measurable results for our business."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Robert Kim" />
                        <AvatarFallback>RK</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Robert Kim</p>
                        <p className="text-sm text-muted-foreground">VP of Marketing, Enterprise Solutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="enterprise" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Enterprise-Grade Solution</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "As a large enterprise, we needed a solution that could scale with our global operations. Volts AI
                      delivered a robust platform that integrated seamlessly with our existing systems."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jonathan Peters" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Jonathan Peters</p>
                        <p className="text-sm text-muted-foreground">CTO, Global Enterprises Inc.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Comprehensive Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "The detailed analytics provided by Volts AI have been invaluable for our enterprise. We can now
                      make data-driven decisions that have significantly improved our marketing ROI."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sophia Martinez" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Sophia Martinez</p>
                        <p className="text-sm text-muted-foreground">Data Analytics Director, MegaCorp</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Global Implementation</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "Implementing Volts AI's solutions across our global offices was seamless. Their team provided
                      excellent support and training, ensuring adoption across all our regions."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Richard Wong" />
                        <AvatarFallback>RW</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Richard Wong</p>
                        <p className="text-sm text-muted-foreground">Global Operations, International Holdings</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="smb" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Perfect for Small Business</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "As a small business owner, I was worried about the cost and complexity of implementing AI
                      solutions. Volts AI made it affordable and simple, with impressive results."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Lisa Brown" />
                        <AvatarFallback>LB</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Lisa Brown</p>
                        <p className="text-sm text-muted-foreground">Owner, Boutique Creations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Leveled the Playing Field</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "Volts AI has helped our small business compete with much larger companies. Their virtual
                      influencer solution has given us a marketing presence we couldn't have achieved otherwise."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Carlos Mendez" />
                        <AvatarFallback>CM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Carlos Mendez</p>
                        <p className="text-sm text-muted-foreground">Founder, Local Eats Co.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </div>
                    <CardTitle className="text-lg">Growth Accelerator</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      "Since implementing Volts AI's solutions, our small business has experienced 200% growth in just
                      one year. Their technology has been a true accelerator for our company."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Aisha Johnson" />
                        <AvatarFallback>AJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Aisha Johnson</p>
                        <p className="text-sm text-muted-foreground">CEO, Startup Innovations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground">
              Detailed case studies showcasing the transformative impact of our solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Fashion Brand Case Study"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Global Fashion Brand Increases Engagement by 450%</CardTitle>
                <CardDescription>Retail & Fashion Industry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A leading fashion brand was struggling to connect with Gen Z consumers. By implementing our AI-powered
                  virtual influencer solution, they created a digital brand ambassador that resonated with their target
                  audience.
                </p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-muted-foreground">Results</span>
                  <span className="font-medium">450% increase in engagement</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Implementation Time</span>
                  <span className="font-medium">6 weeks</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="#">Read Full Case Study</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Tech Startup Case Study"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Tech Startup Achieves 300% ROI with Synthetic Marketing</CardTitle>
                <CardDescription>Technology Industry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A growing tech startup needed to establish market presence without the high costs of traditional
                  marketing. Our synthetic influencer marketing solution provided an innovative approach that delivered
                  exceptional results.
                </p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-muted-foreground">Results</span>
                  <span className="font-medium">300% ROI in first quarter</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Implementation Time</span>
                  <span className="font-medium">4 weeks</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="#">Read Full Case Study</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="#">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Contact our team today to discuss how our AI-powered solutions can transform your business
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

export default CustomersPage

