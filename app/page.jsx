import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { creditBenefits, features, testimonials } from "@/lib/data";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="outline" className="w-fit border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-emerald-400">
              Healthcare made simple
            </Badge>

            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
                <p>Connect with Doctors</p>
                <p className="text-emerald-400">anytime, anywhere</p>
              </h1>

              <p className="max-w-xl text-base leading-7 text-muted-foreground lg:text-lg">
                Book appointments, consult certified doctors, and manage your healthcare experience seamlessly from the comfort of your home.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="group bg-emerald-600 px-6 text-white hover:bg-emerald-700">
                <Link href="/onboarding">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/10 bg-white/5 px-6 text-white backdrop-blur hover:border-emerald-500/20 hover:bg-emerald-500/10"
              >
                <Link href="/onboarding">Find Doctors</Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <Image src="/banner.png" alt="Doctor Consultation" width={1200} height={1000} priority className="h-auto w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-emerald-400">
              Simple Process
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How it Works</h2>

            <p className="mt-4 text-muted-foreground">Our platform makes healthcare accessible with a smooth and seamless experience.</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border border-white/5 bg-white/[0.03] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03]"
              >
                <CardHeader className="space-y-5">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500/15">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="leading-7 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-emerald-400">
              Affordable Healthcare
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Consultation Packages</h2>

            <p className="mt-4 text-muted-foreground">Choose the perfect consultation package that fits your needs.</p>
          </div>

          <Card className="border-white/5 bg-white/[0.03] backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <Stethoscope className="h-5 w-5" />
                </div>
                How Our Credit System Works
              </CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-4">
                {creditBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <Check className="h-3.5 w-3.5" />
                    </div>

                    <p className="leading-7 text-muted-foreground" dangerouslySetInnerHTML={{ __html: benefit }} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-emerald-400">
              Success Stories
            </Badge>

            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">What Our Users Say</h2>

            <p className="text-lg text-muted-foreground">Hear from patients and doctors who use our platform</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-white/5 bg-white/[0.03] transition-all duration-300 hover:border-emerald-500/20">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                      <span className="font-bold text-emerald-400">{testimonial.initials}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>

                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="leading-7 text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="overflow-hidden border-emerald-500/10 bg-gradient-to-r from-emerald-900/20 to-emerald-950/10">
            <CardContent className="relative p-8 md:p-12 lg:p-16">
              <div className="relative z-10 max-w-2xl">
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Ready to take control of your healthcare?</h2>

                <p className="mb-8 text-lg leading-8 text-muted-foreground">
                  Join thousands of users who have simplified their healthcare journey with our platform. Get started today and experience healthcare the way it
                  should be.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="border-white/10 bg-white/5 hover:bg-white/10">
                    <Link href="#pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-[200px] w-[200px] rounded-full bg-emerald-500/10 blur-3xl" />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
