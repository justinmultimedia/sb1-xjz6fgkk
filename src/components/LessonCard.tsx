import React from 'react';
import { Play, BookmarkPlus, Clock, Calendar } from 'lucide-react';
import { Lesson } from '../types';

interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  const { id, title, description, duration, date, category, tags, imageUrl } = lesson;

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/10 hover:border-slate-600 group">
      {/* Card image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
        
        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium rounded-md bg-slate-800/80 text-amber-400 border border-amber-500/30">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-500 text-slate-900 transform transition-all duration-300 hover:scale-110">
            <Play className="h-6 w-6 ml-1" />
          </button>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-5">
        <h3 className="font-rajdhani text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Meta information */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
        
        {/* Action bar */}
        <div className="mt-4 pt-4 border-t border-slate-700 flex justify-between">
          <span 
            className="inline-flex items-center text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            View Lesson
          </span>
          
          <button 
            className="text-gray-400 hover:text-amber-400 transition-colors"
            aria-label="Bookmark lesson"
          >
            <BookmarkPlus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;