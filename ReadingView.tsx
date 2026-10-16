import type { Subject, Reading } from '../data/cfaData';
import QuestionCard from './QuestionCard';

interface ReadingViewProps {
  subject: Subject;
  reading: Reading;
}

export default function ReadingView({ subject, reading }: ReadingViewProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Reading header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{subject.icon}</span>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {subject.name}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {reading.title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {reading.description}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {reading.questions.length} câu hỏi
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            CFA Level 1
          </span>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {reading.questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            total={reading.questions.length}
          />
        ))}
      </div>

      {/* Footer navigation hint */}
      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          💡 Mẹo: Chọn đáp án trước, sau đó bấm "Xem Giải thích" để hiểu rõ hơn.
        </p>
      </div>
    </div>
  );
}
