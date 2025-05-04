import React from 'react';
import { BookOpen, Search, Share2, FileText } from 'lucide-react';
import { Button } from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.svg')] opacity-10"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30">
              <BookOpen className="h-8 w-8 text-amber-500" />
            </div>
          </div>
          
          <h1 className="font-rajdhani text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
            Preserve Your Islamic Teaching Legacy for Generations
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Transform your audio lectures and teaching materials into a beautifully organized digital library—no tech skills required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="primary" size="lg">
              Start Preserving
            </Button>
            <Button variant="secondary" size="lg">
              Explore Library
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            <FeatureCard 
              icon={<Search className="h-6 w-6 text-amber-500" />}
              title="Searchable Knowledge"
              description="Quickly find and reference lessons with powerful search features and keyword highlighting."
            />
            <FeatureCard 
              icon={<FileText className="h-6 w-6 text-emerald-500" />}
              title="Transcription & Timestamps"
              description="Audio lectures automatically transcribed with precise timestamps for easy referencing."
            />
            <FeatureCard 
              icon={<Share2 className="h-6 w-6 text-blue-500" />}
              title="Share Your Wisdom"
              description="Easily share lessons and segments across various platforms and formats."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 transition-all duration-300 hover:border-slate-600/70 hover:shadow-lg hover:shadow-slate-900/30 group">
      <div className="mb-4">{icon}</div>
      <h3 className="font-rajdhani text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Hero;