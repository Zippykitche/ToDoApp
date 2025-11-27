## Todo Frontend

A fully responsive Todo application built with React, TypeScript, Tailwind CSS, and Next.js, connected to a secure backend API.
Users can register, log in, add tasks, mark tasks complete, and delete tasks.
Includes JWT authentication, protected routes, and mobile-optimized UI.

## Tech Stack

React
Next.js
TypeScript
Tailwind CSS
shadcn/ui
lucide-react icons

## Authentication pages:

- Login
- Register
- Protected Todo page (requires login)

## CRUD operations:

- Add task
- Toggle completed
- Delete task
- View all tasks
- Logout button + token removal

The UI is optimized for:

- Mobile (small screens)
- Tablet
- Desktop
Layouts adjust automatically using Tailwind breakpoints, ensuring clean spacing, readability, and usability on all devices.

## API Integration (Frontend → Backend)

The frontend consumes the backend REST API using functions such as:

loginUser()
registerUser()
fetchTodos()
createTodo()
updateTodo()
deleteTodo()

Each call includes the JWT token stored in localStorage.


## Project Structure (Frontend)
/src
  /app
    /login
    /register
     page.tsx (Todo Dashboard)
    /components
     TodoForm.tsx
     TodoItem.tsx
    /utils
     api.ts
     auth.ts
     authApi.ts

## UI Design

The design uses:
Glassmorphism cards
Smooth gradients
Rounded components
Clean spacing
Lucide icons for modern visuals


## Running the Project
1. Clone the repo
git clone your-repo-url
cd your-project

2. Install dependencies
npm install

3. Run frontend
npm run dev




## Todo Backend

A simple, secure, and modular Todo API built with Node.js, Express, MongoDB (Mongoose), and JWT authentication. The API supports full CRUD operations for todos with user-based authorization.

## Features
- User Authentication

Register new users
Login with email & password
Passwords hashed with bcrypt
Authentication via JWT (24h expiry)
Only authenticated users can access Todo routes

- Todo Management (CRUD)

Create, read, update, delete todos
Todos are private to each user
Each todo linked to its owner
description, completed status
Proper validation & error handling

## Project Structure
/src
  /config       
  /controllers  
  /models       
  /routes       
  /middleware         
app.js
server.js

## Tech Stack

Node.js + Express
MongoDB + Mongoose
JWT for auth
bcrypt for hashing
dotenv for environment variables
Postman/Insomnia for testing (optional)

## Authentication Endpoints
- POST /auth/register
Creates a new user
Hashes password
Returns user info (without password)

- POST /auth/login
Validates email & password
Returns JWT token (24h)

- Middleware
Authentication
Verifies JWT
Attaches decoded user to req.user
Authorization

Users can only access or modify their own todos

## Todo Endpoints
- POST /todos
Create new todo
Requires authentication
Owner auto-assigned from JWT

- GET /todos
Fetch all todos of the logged-in user

- GET /todos/:id
Fetch a single todo (must belong to user)
PATCH /todos/:id
Update title, description, or completed status
User must be the owner

- DELETE /todos/:id
Delete a todo
User must be the owner


## Running the Project
npm install
npm run dev


API runs at:

http://localhost:5000