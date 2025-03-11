# URL Shortener Application

A modern URL shortening service built with TypeScript, Express, and PostgreSQL that allows users to create and manage shortened URLs with analytics.


## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Local Setup](#local-setup)
- [Docker Setup](#docker-setup)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)

## ✨ Features

- Create shortened URLs with custom titles
- User authentication and registration
- Track click analytics for each URL
- User dashboard with URL management
- JWT-based authentication

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT, Passport
- **Containerization**: Docker

## 💻 Local Setup

### Prerequisites

- Node.js (v14+)
- npm or yarn
- PostgreSQL

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/Blaiseniyo/URLs-Shortener-backend.git
cd URLs-Shortener-backend
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add the following variables:
```
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_jwt_secret
```

4. **Run database migrations**
```bash
npx sequelize-cli db:migrate
```

5. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

The server should now be running at `http://localhost:3000`.

## 🐳 Docker Setup

### Prerequisites

- Docker
- Docker Compose

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/Blaiseniyo/URLs-Shortener-backend.git
cd URLs-Shortener-backendp
```

2. **Build and run the Docker containers**
```bash
docker-compose up --build
```

The application should now be running at `http://localhost:3000`.

## 📖 API Documentation

The API documentation is available at `http://localhost:3000/api-docs` once the server is running.

## 🔧 Environment Variables

The following environment variables need to be set in the `.env` file:

- `DATABASE_URL`: The URL of your PostgreSQL database
- `JWT_SECRET`: The secret key for JWT authentication

## 🗂️ Project Structure

```
urls-shortener-app/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
├── .env.example
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md