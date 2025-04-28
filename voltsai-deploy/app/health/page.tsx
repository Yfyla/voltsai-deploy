import Link from "next/link"
import { ArrowRight, CheckCircle2, FileText, HeartPulse, LineChart, Pill, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HealthPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Page Header */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Health Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transforming healthcare through innovative digital solutions and AI-powered systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#objectives">Key Objectives</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#recommendations">EMR Recommendations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives Section */}
      <section id="objectives" className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Objectives of Libya's National Digital Health Policy
            </h2>
            <p className="text-muted-foreground">
              Comprehensive digital transformation strategies to enhance healthcare delivery and outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HeartPulse className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Connected & Optimized Health System</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Develop a seamless, automated healthcare ecosystem with EMRs, telemedicine, and AI-powered solutions
                  to improve efficiency and accessibility. Enable secure data exchange among providers, insurers, and
                  government agencies.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link href="#" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Data-Driven Health Outcomes</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Use dashboards and analytics to track health trends, shape policies, and enhance proactive healthcare
                  management. Leverage big data and AI for better resource allocation and improved patient outcomes.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link href="#" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Health Financing & Cost Efficiency</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Streamline claims processing, optimize healthcare spending, and ensure sustainable funding through
                  digital solutions. Implement transparent financial systems that reduce waste and improve resource
                  allocation.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link href="#" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Pill className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Pharmaceutical & Supply Chain Management</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Improve access to essential medicines and enhance medical supply logistics through digital tracking
                  and management systems. Implement solutions that prevent counterfeit medications and ensure timely
                  delivery of critical supplies.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link href="#" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Emergency Preparedness</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Digital medical records support quick response to pandemics, disasters, and public health crises.
                  Implement early warning systems and coordinated response mechanisms to enhance national resilience to
                  health emergencies.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link href="#" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* EMR Recommendations Section */}
      <section id="recommendations" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommendations for EMR Implementation</h2>
            <p className="text-muted-foreground">
              A robust Electronic Medical Record system should incorporate these key features
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enable Unified Patient Records</h3>
                    <p className="text-muted-foreground">
                      Nationwide access for seamless care coordination across all healthcare facilities, ensuring
                      complete patient history is available to authorized providers regardless of location.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Support Voice-Enabled Documentation</h3>
                    <p className="text-muted-foreground">
                      AI-powered ambient listening reduces administrative work for healthcare providers, allowing them
                      to focus more on patient care while maintaining accurate and comprehensive documentation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enhance Patient Engagement</h3>
                    <p className="text-muted-foreground">
                      Mobile apps for accessing records, scheduling appointments, and prescription management empower
                      patients to take an active role in their healthcare journey and improve adherence to treatment
                      plans.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Offer Advanced Financial & Analytics Tools</h3>
                    <p className="text-muted-foreground">
                      Efficient claims processing and data-driven decision-making capabilities provide insights for
                      healthcare administrators and policymakers to optimize resource allocation and improve system
                      efficiency.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold mb-6">Benefits of Cutting-Edge EMR Systems</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <p>Improved efficiency and reduced administrative burden</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <p>Reduced clinician burnout through streamlined workflows</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <p>Enhanced patient satisfaction and engagement</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <p>Financial sustainability through optimized billing</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <p>High security and compliance with healthcare regulations</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Request EMR Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Healthcare Delivery?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Contact our team today to discuss how our digital health solutions can help your organization improve
              patient outcomes and operational efficiency
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

