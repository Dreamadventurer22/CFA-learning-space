import { useState } from 'react';
import type { Question } from '../data/cfaData';

interface QuestionCardProps {
  question: Question;
  index: number;
  total: number;
}

export default function QuestionCard({ question, index, total }: QuestionCardProps) {
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleSelectAnswer = (label: string) => {
    setSelectedAnswer(label);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;
  const hasSelected = selectedAnswer !== null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
      {/* Question header */}
      <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Question {index + 1} / {total}
        </span>
        {hasSelected && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            isCorrect
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
          }`}>
            {isCorrect ? '✓ Đúng' : '✗ Sai'}
          </span>
        )}
      </div>

      {/* Question body */}
      <div className="p-5">
        <p className="text-gray-800 dark:text-gray-100 text-[15px] leading-relaxed mb-4">
          {question.text}
        </p>

        {/* Options */}
        <div className="space-y-2 mb-5">
          {question.options.map(option => {
            const isSelected = selectedAnswer === option.label;
            const isCorrectOption = option.label === question.correctAnswer;

            let optionClass = 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10';

            if (hasSelected) {
              if (isCorrectOption) {
                optionClass = 'border-green-400 dark:border-green-500 bg-green-50 dark:bg-green-900/20';
              } else if (isSelected && !isCorrect) {
                optionClass = 'border-red-400 dark:border-red-500 bg-red-50 dark:bg-red-900/20';
              } else {
                optionClass = 'border-gray-200 dark:border-gray-700 opacity-60';
              }
            } else if (isSelected) {
              optionClass = 'border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20';
            }

            return (
              <button
                key={option.label}
                onClick={() => handleSelectAnswer(option.label)}
                disabled={hasSelected}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-150 ${optionClass} ${
                  hasSelected ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <span className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-semibold ${
                    hasSelected && isCorrectOption
                      ? 'border-green-500 bg-green-500 text-white'
                      : hasSelected && isSelected && !isCorrect
                      ? 'border-red-500 bg-red-500 text-white'
                      : isSelected
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : 'border-gray-300 dark:border-gray-500 text-gray-500 dark:text-gray-400'
                  }`}>
                    {hasSelected && isCorrectOption ? '✓' : hasSelected && isSelected && !isCorrect ? '✗' : option.label}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-200 pt-0.5">
                    {option.text}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation toggle */}
        {hasSelected && (
          <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors text-sm font-medium"
            >
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${showExplanation ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {showExplanation ? 'Ẩn Giải thích' : 'Xem Giải thích'}
            </button>

            {/* Explanation content */}
            {showExplanation && (
              <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 animate-fadeIn">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                    <svg className="w-3 h-3 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Đáp án đúng: {question.correctAnswer}
                  </span>
                </div>
                <div className="space-y-2.5">
                  {question.explanation.map((line, i) => (
                    <p
                      key={i}
                      className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-2 border-l-2 border-indigo-300 dark:border-indigo-600"
                      dangerouslySetInnerHTML={{ __html: formatExplanation(line) }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Simple markdown-like formatting for explanation
function formatExplanation(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white font-semibold">$1</strong>')
    .replace(/=>/g, '<span class="text-indigo-500 dark:text-indigo-400 font-mono">⇒</span>')
    .replace(/\|/g, '<span class="text-gray-400 mx-1">|</span>');
}
