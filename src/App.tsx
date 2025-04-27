import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-blue-600">FULL CREATIVE QUIZ</h1>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          {quizStarted ? <QuizPage /> : <LandingPage onStartQuiz={handleStartQuiz} />}
        </div>
      </main>
      
      <footer className="bg-white py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} FULL CREATIVE QUIZ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;