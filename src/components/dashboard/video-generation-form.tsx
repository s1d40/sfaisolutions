'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Film, Loader2 } from 'lucide-react';

const voices = [
  { id: 'Algenib', name: 'Algenib (Male)' },
  { id: 'Cygni', name: 'Cygni (Female)' },
  { id: 'Elnath', name: 'Elnath (Male)' },
  { id: 'Polis', name: 'Polis (Female)' },
  { id: 'en-US-Standard-A', name: 'Standard US (Male)' },
  { id: 'en-GB-Standard-B', name: 'Standard UK (Male)' },
];

type VideoGenerationFormProps = {
  onVideoCreate: (topic: string, aspectRatio: '16:9' | '9:16', voice: string) => Promise<void>;
};

export function VideoGenerationForm({ onVideoCreate }: VideoGenerationFormProps) {
  const [topic, setTopic] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [voice, setVoice] = useState('Algenib');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);
    await onVideoCreate(topic, aspectRatio, voice);
    setIsGenerating(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a New Video</CardTitle>
        <CardDescription>Enter a topic or URL below to generate a new video with AI.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="topic">Topic or URL</Label>
            <Input
              id="topic"
              placeholder="e.g., 'The history of the internet' or a wikipedia.org link"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              disabled={isGenerating}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="aspect-ratio">Aspect Ratio</Label>
              <Select
                value={aspectRatio}
                onValueChange={(v: '16:9' | '9:16') => setAspectRatio(v)}
                disabled={isGenerating}
              >
                <SelectTrigger id="aspect-ratio">
                  <SelectValue placeholder="Select ratio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="16:9">16:9 (Landscape)</SelectItem>
                  <SelectItem value="9:16">9:16 (Portrait)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="voice">Voice</Label>
              <Select
                value={voice}
                onValueChange={setVoice}
                disabled={isGenerating}
              >
                <SelectTrigger id="voice">
                  <SelectValue placeholder="Select voice" />
                </SelectTrigger>
                <SelectContent>
                  {voices.map((v) => (
                    <SelectItem key={v.id} value={v.id}>
                      {v.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" disabled={isGenerating} className="w-full md:w-auto">
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Film className="mr-2 h-4 w-4" />
                Generate Video
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
