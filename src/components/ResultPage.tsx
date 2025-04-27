import React from 'react';
import { QuizResult } from '../types';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ResultPageProps {
  results: QuizResult;
}

const ResultPage: React.FC<ResultPageProps> = ({ results }) => {
  const { score, totalQuestions, percentage } = results;
  
  const getResultMessage = () => {
    if (percentage >= 80) {
      return "Excellent! You're a FULL quiz master!";
    } else if (percentage >= 60) {
      return "Good job! You know your stuff!";
    } else if (percentage >= 40) {
      return "Not bad, but there's room for improvement.";
    } else {
      return "Keep practicing and try again!";
    }
  };

  const getResultIcon = () => {
    if (percentage >= 60) {
      return <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />;
    } else {
      return <XCircle className="w-16 h-16 text-red-500 mb-4" />;
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          {getResultIcon()}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Results</h1>
          <p className="text-lg text-gray-600 mb-6">{getResultMessage()}</p>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div 
              className="h-4 rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${percentage}%`,
                backgroundColor: percentage >= 60 ? '#10B981' : percentage >= 40 ? '#F59E0B' : '#EF4444'
              }}
            ></div>
          </div>
          
          <div className="text-4xl font-bold mb-6">
            {score} / {totalQuestions}
            <span className="text-xl text-gray-500 ml-2">({percentage}%)</span>
          </div>
          
          <button
            onClick={refreshPage}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;