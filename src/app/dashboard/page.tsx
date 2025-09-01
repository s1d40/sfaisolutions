'use client';

import { useState } from 'react';
import type { Project } from '@/lib/types';
import { SiteHeader } from '@/components/site-header';
import { VideoGenerationForm } from '@/components/dashboard/video-generation-form';
import { ProjectGrid } from '@/components/dashboard/project-grid';
import { generateVideoFromTopic } from '@/ai/flows/generate-video-from-topic';
import { useToast } from '@/hooks/use-toast';

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { toast } = useToast();

  const updateProject = (projectId: string, updates: Partial<Project>) => {
    setProjects((prevProjects) =>
      prevProjects.map((p) => (p.id === projectId ? { ...p, ...updates } : p))
    );
  };

  const handleCreateVideo = async (topic: string, aspectRatio: '16:9' | '9:16', voice: string) => {
    if (!topic.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a topic to generate a video.',
        variant: 'destructive',
      });
      return;
    }
    const tempId = crypto.randomUUID();
    const newProject: Project = { id: tempId, topic, aspectRatio, voice, status: 'generating' };
    setProjects((p) => [newProject, ...p]);

    try {
      const result = await generateVideoFromTopic({ topic, aspectRatio, voiceName: voice });
      updateProject(tempId, { status: 'completed', videoUrl: result.videoDataUri });
      toast({
        title: 'Success!',
        description: 'Your video has been generated.',
      });
    } catch (e: any) {
      console.error(e);
      const errorMessage = e.message || 'An unknown error occurred during video generation.';
      updateProject(tempId, { status: 'error', error: errorMessage });
      toast({
        title: 'Generation Failed',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  };

  const deleteProject = (projectId: string) => {
    setProjects((prevProjects) => prevProjects.filter((p) => p.id !== projectId));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container py-8 px-4 md:px-6">
        <div className="space-y-8">
          <VideoGenerationForm onVideoCreate={handleCreateVideo} />
          <ProjectGrid projects={projects} onDeleteProject={deleteProject} />
        </div>
      </main>
    </div>
  );
}
