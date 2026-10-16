import { useState } from 'react';
import { cfaData, type Subject, type Reading } from '../data/cfaData';

interface SidebarProps {
  isOpen: boolean;
  currentReadingId: string | null;
  onSelectReading: (readingId: string) => void;
  onGoHome: () => void;
}

export default function Sidebar({ isOpen, currentReadingId, onSelectReading, onGoHome }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => {}} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-16 left-0 z-50 lg:z-10 h-[calc(100vh-4rem)] w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <nav className="p-4 space-y-1">
          {/* Home button */}
          <button
            onClick={onGoHome}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mb-4"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Trang chủ
          </button>

          {/* Subjects */}
          {cfaData.map(subject => (
            <SubjectItem
              key={subject.id}
              subject={subject}
              currentReadingId={currentReadingId}
              onSelectReading={onSelectReading}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}

function SubjectItem({
  subject,
  currentReadingId,
  onSelectReading,
}: {
  subject: Subject;
  currentReadingId: string | null;
  onSelectReading: (id: string) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(() => {
    // Auto-expand if current reading is in this subject
    return subject.readings.some(r => r.id === currentReadingId);
  });

  const hasActiveReading = subject.readings.some(r => r.id === currentReadingId);

  return (
    <div className="space-y-0.5">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          hasActiveReading
            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        <span className="text-base">{subject.icon}</span>
        <span className="flex-1 text-left truncate">{subject.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="ml-4 pl-3 border-l border-gray-200 dark:border-gray-700 space-y-0.5">
          {subject.readings.map(reading => (
            <ReadingItem
              key={reading.id}
              reading={reading}
              isActive={reading.id === currentReadingId}
              onSelect={() => onSelectReading(reading.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ReadingItem({
  reading,
  isActive,
  onSelect,
}: {
  reading: Reading;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
        isActive
          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 font-medium'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-200'
      }`}
    >
      <span className="line-clamp-2">{reading.title}</span>
      <span className="block text-xs text-gray-400 dark:text-gray-500 mt-0.5">
        {reading.questions.length} câu hỏi
      </span>
    </button>
  );
}
