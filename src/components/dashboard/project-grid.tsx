'use client';

import type { Project } from '@/lib/types';
import { ProjectCard } from './project-card';
import { Card, CardContent } from '../ui/card';
import { Film } from 'lucide-react';

type ProjectGridProps = {
  projects: Project[];
  onDeleteProject: (projectId: string) => void;
};

export function ProjectGrid({ projects, onDeleteProject }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center p-12 border-dashed">
        <CardContent className="flex flex-col items-center text-center text-muted-foreground space-y-4">
          <Film className="h-16 w-16" />
          <h3 className="text-xl font-semibold">No Projects Yet</h3>
          <p>Create your first video project to see it here.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 font-headline">Your Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onDelete={onDeleteProject} />
        ))}
      </div>
    </div>
  );
}
