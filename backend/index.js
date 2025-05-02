import express from 'express';
import cors from 'cors';
import { questions } from './questions.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('https://mani-backend-401553303388.us-central1.run.app/api/questions', (req, res) => {
  // Return questions without correctAnswer property
  const safeQuestions = questions.map(({ id, question, options }) => ({
    id,
    question,
    options,
  }));
  
  res.json(safeQuestions);
});

app.post('https://mani-backend-401553303388.us-central1.run.app/api/submit', (req, res) => {
  const { answers } = req.body;
  
  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: 'Invalid answers format' });
  }
  
  // Calculate score
  let score = 0;
  for (let i = 0; i < Math.min(answers.length, questions.length); i++) {
    if (answers[i] === questions[i].correctAnswer) {
      score++;
    }
  }
  
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  res.json({
    score,
    totalQuestions,
    percentage
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});