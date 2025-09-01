import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { ArrowRight, Film, Mic, PenTool } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: 'AI Scripting',
    description: 'Our AI analyzes your topic to write compelling video scripts in seconds.',
  },
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: 'Voice Synthesis',
    description: 'Choose from a variety of realistic AI voices to narrate your content.',
  },
  {
    icon: <Film className="h-8 w-8 text-primary" />,
    title: 'Video Generation',
    description: 'Visually stunning scenes are automatically generated to match your script.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline">
                  Turn Your Ideas into Videos with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Cocreator is an AI-powered platform that effortlessly transforms any topic or URL into a captivating short video, complete with script, voiceover, and visuals.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Create professional-quality videos in three simple steps.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-background/50 border-0 shadow-lg">
                  <CardHeader className="flex flex-col items-center text-center">
                    {feature.icon}
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground">
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Cocreator. All rights reserved.</p>
      </footer>
    </div>
  );
}
