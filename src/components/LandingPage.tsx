import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onStartQuiz: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartQuiz }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to FULL CREATIVE QUIZ
      </h1>
      <p className="text-gray-600 max-w-md mb-8">
        Test your knowledge with our javascript quiz. Answer the questions and see how well you score!
      </p>
      <button
        onClick={onStartQuiz}
        className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center space-x-2"
      >
        <span>Click to Start</span>
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default LandingPage;