# Simple To Do App

A full-stack To Do application built with React, Node.js, and MongoDB.

## Features
- ✅ Create new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Clean, responsive UI

## Tech Stack
- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Containerization**: Docker + Docker Compose

## Quick Start

```bash
# Start the application
docker-compose up

# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
```

## Development

```bash
# Start in development mode
docker-compose -f docker-compose.dev.yml up

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## Project Structure
```
todo-app/
├── client/          # React frontend
├── server/          # Node.js backend
├── docker-compose.yml
├── docker-compose.dev.yml
└── README.md
```
