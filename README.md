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
docker-compose up

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## Production Deployment

```bash
# Build production images
docker-compose -f docker-compose.prod.yml build

# Start production services
docker-compose -f docker-compose.prod.yml up
```

### Deploy to Cloud

- **Frontend**: Deploy to [Vercel](https://vercel.com)
- **Backend**: Deploy to [Railway](https://railway.app) or [Render](https://render.com)
- **Database**: Use [MongoDB Atlas](https://cloud.mongodb.com)
- **Containers**: Push to [Docker Hub](https://hub.docker.com)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Project Structure
```
todo-app/
├── client/          # React frontend
├── server/          # Node.js backend
├── docker-compose.yml
├── docker-compose.dev.yml
└── README.md
```
