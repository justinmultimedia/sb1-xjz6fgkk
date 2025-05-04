import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentLibrary from './components/ContentLibrary';
import LessonDetail from './components/LessonDetail';
import Footer from './components/Footer';
import { selectedLesson, sampleTranscript } from './data/sampleData';

function App() {
  // In a real application, you'd use React Router to handle routing
  // For this demo, we'll show all components together
  const [view, setView] = React.useState<'home' | 'detail'>('home');
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      
      {view === 'home' ? (
        <>
          <Hero />
          <ContentLibrary />
          <button 
            className="fixed bottom-5 right-5 bg-amber-500 hover:bg-amber-600 text-slate-900 p-2 rounded-md transition-colors"
            onClick={() => setView('detail')}
          >
            View Lesson Detail
          </button>
        </>
      ) : (
        <>
          <LessonDetail lesson={selectedLesson} transcript={sampleTranscript} />
          <button 
            className="fixed bottom-5 right-5 bg-amber-500 hover:bg-amber-600 text-slate-900 p-2 rounded-md transition-colors"
            onClick={() => setView('home')}
          >
            Back to Home
          </button>
        </>
      )}
      
      <Footer />
    </div>
  );
}

export default App;