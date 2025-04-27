# Quiz Application

A simple quiz application with separate frontend and backend Docker containers.

## Structure

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Containerization**: Docker with separate containers for frontend and backend

## Features

- Clean, responsive UI
- Multiple-choice quiz questions
- Score tracking and results display
- Dockerized components for easy deployment

## Running with Docker

1. Make sure you have Docker and Docker Compose installed
2. Build and start the containers:

```bash
docker-compose up --build
```

3. Access the application at http://localhost:3000

## Development Without Docker

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Environment Variables

- `VITE_API_URL`: URL for the backend API (default: http://localhost:3001)