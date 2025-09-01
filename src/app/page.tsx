import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { ArrowRight, Bot, Code, PenTool } from 'lucide-react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-conic-gradient opacity-20" />
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in-up">
                <div className="space-y-2">
                  <h1 className="inline-block text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 animate-background-shine">
                    Building the Future of AI Solutions
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    SFAI Solutions is dedicated to pushing the boundaries of what's possible with artificial intelligence. We are a team of innovators, creators, and problem-solvers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="group">
                    <Link href="/cocreator">
                      Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#features">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl animate-fade-in-up group logo-shadow-cast" style={{ animationDelay: '0.2s' }}>
                <Image
                  src="/images/logo.png"
                  alt="AI Innovation"
                  fill
                  className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105 logo-glow-edge"
                  data-ai-hint="A diverse team interacting with a holographic AI interface."
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform is packed with features to help you create, innovate, and deploy AI solutions faster than ever before.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><PenTool /> AI-Powered Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Generate high-quality video scripts, voiceovers, and visuals from a simple topic or URL.</CardDescription>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Bot /> Advanced AI Models</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Leverage state-of-the-art AI models for unparalleled performance and creativity.</CardDescription>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Code /> Developer Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Integrate our solutions seamlessly with our comprehensive API and documentation.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="cocreator" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
              <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl animate-fade-in-up group logo-shadow-cast" style={{ animationDelay: '0.2s' }}>
                <Image
                  src="/images/logo.png"
                  alt="Cocreator Product Showcase"
                  fill
                  className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105 logo-glow-edge"
                  data-ai-hint="Hands gesturing over a futuristic screen displaying video timelines."
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 animate-fade-in-up">
                <div className="space-y-2 text-center lg:text-left">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Introducing Cocreator</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-lg mx-auto lg:mx-0">
                    Our first product, Cocreator, is an AI-powered platform that effortlessly transforms any topic or URL into a captivating short video, complete with script, voiceover, and visuals.
                  </p>
                  <Button asChild size="lg" className="group">
                    <Link href="/cocreator">
                      Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 SFAI Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}