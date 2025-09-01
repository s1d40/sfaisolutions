'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

type VideoPlayerModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  videoUrl: string;
  title: string;
};

export function VideoPlayerModal({ isOpen, setIsOpen, videoUrl, title }: VideoPlayerModalProps) {
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = `${title.replace(/\s+/g, '_')}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Your generated video. Play, watch, and download.</DialogDescription>
        </DialogHeader>
        <div className="aspect-video rounded-lg overflow-hidden bg-black">
          {isOpen && <video src={videoUrl} controls autoPlay className="w-full h-full" />}
        </div>
        <DialogFooter>
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download Video
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
