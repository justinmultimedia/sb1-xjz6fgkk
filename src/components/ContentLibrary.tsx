import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Tag, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import LessonCard from './LessonCard';
import { sampleLessons } from '../data/sampleData';

const ContentLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredLessons = sampleLessons.filter(lesson => {
    // Handle search
    if (searchTerm && !lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !lesson.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Handle category filter
    if (activeFilter !== 'all' && lesson.category !== activeFilter) {
      return false;
    }
    
    return true;
  });
  
  const categories = ['all', 'aqidah', 'fiqh', 'tafsir', 'hadith', 'seerah'];
  
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-rajdhani text-3xl md:text-4xl font-bold text-white mb-6">Knowledge Library</h2>
          
          {/* Search and filter bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-slate-700 bg-slate-800/50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                placeholder="Search lessons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === category
                        ? 'bg-amber-500 text-slate-900'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
          
          {/* Pagination/Load more */}
          {filteredLessons.length > 0 ? (
            <div className="mt-10 text-center">
              <Button variant="outline">
                Load More Lessons
              </Button>
            </div>
          ) : (
            <div className="mt-10 text-center">
              <p className="text-gray-400 mb-4">No lessons found matching your search criteria.</p>
              <Button variant="secondary" onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentLibrary;