import { Question, QuizResult } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const fetchQuestions = async (): Promise<Question[]> => {
  try {
    const response = await fetch(`${API_URL}/api/questions`);
    if (!response.ok) {
      throw new Error('Failed to fetch questions');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const submitAnswers = async (answers: number[]): Promise<QuizResult> => {
  try {
    const response = await fetch(`${API_URL}/api/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit answers');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting answers:', error);
    throw error;
  }
};