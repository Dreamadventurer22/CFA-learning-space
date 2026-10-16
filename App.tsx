import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeView from './components/HomeView';
import ReadingView from './components/ReadingView';
import { getReadingById } from './data/cfaData';

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentReadingId, setCurrentReadingId] = useState<string | null>(null);

  const handleSelectReading = (readingId: string) => {
    setCurrentReadingId(readingId);
    setSidebarOpen(false); // Close sidebar on mobile after selection
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setCurrentReadingId(null);
    setSidebarOpen(false);
  };

  const currentData = currentReadingId ? getReadingById(currentReadingId) : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <Header
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />

      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          currentReadingId={currentReadingId}
          onSelectReading={handleSelectReading}
          onGoHome={handleGoHome}
        />

        <main className="flex-1 min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8">
          {currentData ? (
            <ReadingView subject={currentData.subject} reading={currentData.reading} />
          ) : (
            <HomeView onSelectReading={handleSelectReading} />
          )}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
