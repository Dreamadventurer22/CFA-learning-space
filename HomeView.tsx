import { cfaData, getTotalQuestions } from '../data/cfaData';

interface HomeViewProps {
  onSelectReading: (readingId: string) => void;
}

export default function HomeView({ onSelectReading }: HomeViewProps) {
  const totalQuestions = getTotalQuestions();
  const totalReadings = cfaData.reduce((acc, s) => acc + s.readings.length, 0);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          CFA Level 1 Preparation
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Chào mừng đến với <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">CFA Practice</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Nền tảng luyện tập câu hỏi CFA Level 1. Chọn môn học và bắt đầu ôn tập ngay.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10 max-w-md mx-auto">
        <div className="text-center p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{cfaData.length}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Môn học</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{totalReadings}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Readings</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{totalQuestions}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Câu hỏi</div>
        </div>
      </div>

      {/* Subject cards */}
      <div className="space-y-6">
        {cfaData.map(subject => (
          <div key={subject.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
              <span className="text-2xl">{subject.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{subject.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {subject.readings.length} readings • {subject.readings.reduce((acc, r) => acc + r.questions.length, 0)} câu hỏi
                </p>
              </div>
            </div>
            <div className="p-4 grid gap-2">
              {subject.readings.map(reading => (
                <button
                  key={reading.id}
                  onClick={() => onSelectReading(reading.id)}
                  className="w-full text-left px-4 py-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-150 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors truncate">
                        {reading.title}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 truncate">
                        {reading.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {reading.questions.length} Q
                      </span>
                      <svg className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
