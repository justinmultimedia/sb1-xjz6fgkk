import React, { useState } from 'react';
import { Play, Pause, ChevronRight, Share2, Bookmark, MessageCircle, Download } from 'lucide-react';
import { Button } from './ui/Button';
import { Lesson, Transcript } from '../types';

interface LessonDetailProps {
  lesson: Lesson;
  transcript: Transcript[];
}

const LessonDetail: React.FC<LessonDetailProps> = ({ lesson, transcript }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeTranscriptIndex, setActiveTranscriptIndex] = useState(0);
  
  // Simulate audio playback for demo purposes
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center text-sm text-gray-400">
          <span className="hover:text-amber-400 transition-colors cursor-pointer">Library</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="hover:text-amber-400 transition-colors cursor-pointer">{lesson.category}</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-amber-400">{lesson.title}</span>
        </div>
        
        {/* Lesson header */}
        <div className="mb-10">
          <h1 className="font-rajdhani text-3xl md:text-4xl font-bold text-white mb-4">
            {lesson.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <span className="text-amber-400">Scholar:</span>
              <span>Sheikh Abdullah Amir</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-amber-400">Category:</span>
              <span>{lesson.category}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-amber-400">Date:</span>
              <span>{lesson.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-amber-400">Duration:</span>
              <span>{lesson.duration}</span>
            </div>
          </div>
        </div>
        
        {/* Audio player and transcript */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Audio player column */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 sticky top-24">
              <div className="aspect-square mb-6 relative rounded-lg overflow-hidden">
                <img 
                  src={lesson.imageUrl} 
                  alt={lesson.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                
                {/* Play button overlay */}
                <button 
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={togglePlayback}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-500 text-slate-900 transform transition hover:scale-110">
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6 ml-1" />
                    )}
                  </div>
                </button>
              </div>
              
              {/* Audio controls */}
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-xs text-gray-400">00:00</span>
                  <div className="flex-grow mx-2">
                    <div className="h-1 bg-slate-700 rounded-full">
                      <div className="h-1 bg-amber-500 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{lesson.duration}</span>
                </div>
                
                <div className="flex justify-center gap-4">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="19 20 9 12 19 4 19 20"></polygon>
                      <line x1="5" y1="19" x2="5" y2="5"></line>
                    </svg>
                  </button>
                  <button 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-slate-900 transform transition hover:scale-110"
                    onClick={togglePlayback}
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5 ml-0.5" />
                    )}
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 4 15 12 5 20 5 4"></polygon>
                      <line x1="19" y1="5" x2="19" y2="19"></line>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                <button className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-amber-400 transition-colors">
                  <Share2 className="h-5 w-5 mb-1" />
                  <span className="text-xs">Share</span>
                </button>
                <button className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-amber-400 transition-colors">
                  <Bookmark className="h-5 w-5 mb-1" />
                  <span className="text-xs">Save</span>
                </button>
                <button className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-amber-400 transition-colors">
                  <MessageCircle className="h-5 w-5 mb-1" />
                  <span className="text-xs">Comment</span>
                </button>
                <button className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-amber-400 transition-colors">
                  <Download className="h-5 w-5 mb-1" />
                  <span className="text-xs">Download</span>
                </button>
              </div>
              
              {/* Tags */}
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {lesson.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-slate-700 text-amber-400 hover:bg-slate-600 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Transcript column */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
              <h2 className="font-rajdhani text-2xl font-semibold text-white mb-4">Description</h2>
              <p className="text-gray-300">{lesson.description}</p>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="font-rajdhani text-2xl font-semibold text-white mb-4">Transcript</h2>
              
              <div className="space-y-4">
                {transcript.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg transition-colors ${
                      activeTranscriptIndex === index 
                        ? 'bg-amber-500/10 border border-amber-500/30' 
                        : 'hover:bg-slate-700/50'
                    }`}
                    onClick={() => setActiveTranscriptIndex(index)}
                  >
                    <div className="flex items-start mb-2">
                      <span className="px-2 py-0.5 text-xs font-medium rounded bg-slate-700 text-amber-400 mr-2">
                        {item.timestamp}
                      </span>
                      <button 
                        className="text-gray-400 hover:text-amber-400"
                        aria-label="Play from this timestamp"
                      >
                        <Play className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonDetail;