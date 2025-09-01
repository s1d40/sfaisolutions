'use client';

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const steps = ['Analyzing topic...', 'Writing script...', 'Synthesizing voice...', 'Rendering video...', 'Finalizing...'];

export function GenerationStatus() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 4000); // Change step every 4 seconds

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + 2;
      });
    }, 200);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="w-full p-4 space-y-3">
      <p className="text-sm text-center text-muted-foreground">{steps[currentStep]}</p>
      <Progress value={progress} className="w-full" />
      <p className="text-xs text-center text-muted-foreground">This may take a minute or two. Please don't close this page.</p>
    </div>
  );
}
