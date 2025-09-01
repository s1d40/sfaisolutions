'use client';

import { useState } from 'react';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, MoreVertical, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { VideoPlayerModal } from './video-player-modal';
import Image from 'next/image';
import { GenerationStatus } from './generation-status';
import { Badge } from '../ui/badge';

type ProjectCardProps = {
  project: Project;
  onDelete: (projectId: string) => void;
};

export function ProjectCard({ project, onDelete }: ProjectCardProps) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleDownload = () => {
    if (!project.videoUrl) return;
    const link = document.createElement('a');
    link.href = project.videoUrl;
    link.download = `${project.topic.replace(/\s+/g, '_')}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderContent = () => {
    switch (project.status) {
      case 'generating':
        return <GenerationStatus />;
      case 'error':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center text-destructive p-4">
            <h4 className="font-semibold">Generation Failed</h4>
            <p className="text-xs text-muted-foreground">{project.error}</p>
          </div>
        );
      case 'completed':
        return (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image src="https://picsum.photos/600/400" alt={project.topic} fill className="object-cover" data-ai-hint="abstract video" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <Button variant="secondary" size="sm" onClick={() => setIsPlayerOpen(true)}>
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="overflow-hidden flex flex-col">
        <CardHeader className="flex-row items-start justify-between">
          <div className="flex-1 mr-2">
            <CardTitle className="text-base leading-tight truncate">{project.topic}</CardTitle>
            <div className="flex items-center space-x-2 mt-1">
              <Badge variant="outline">{project.aspectRatio}</Badge>
              <Badge variant="outline">{project.voice}</Badge>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your project.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onDelete(project.id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="p-0 flex-1 flex items-center justify-center bg-muted/30 min-h-[150px]">
          {renderContent()}
        </CardContent>
        {project.status === 'completed' && (
          <CardFooter className="p-2 bg-background/50">
            <Button variant="ghost" className="w-full justify-start" onClick={() => setIsPlayerOpen(true)}>
              <Eye className="mr-2 h-4 w-4" /> View
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </CardFooter>
        )}
      </Card>
      {project.videoUrl && <VideoPlayerModal isOpen={isPlayerOpen} setIsOpen={setIsPlayerOpen} videoUrl={project.videoUrl} title={project.topic} />}
    </>
  );
}
