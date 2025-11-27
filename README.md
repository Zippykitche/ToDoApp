📝 Todo App — Full-Stack CRUD Application

A fully responsive Todo application built with React, TypeScript, Tailwind CSS, and Next.js, connected to a secure backend API.
Users can register, log in, add tasks, mark tasks complete, and delete tasks.
Includes JWT authentication, protected routes, and mobile-optimized UI.

🚀 Features
✅ Frontend

Built with Next.js, React, TypeScript, and Tailwind CSS

Uses shadcn/ui for clean, accessible UI components

Fully responsive — optimized for mobile, tablet, and desktop

Authentication pages:

Login

Register

Protected Todo page (requires login)

CRUD operations:

➕ Add task

✏️ Toggle completed

❌ Delete task

📄 View all tasks

Logout button + token removal

🔧 Tech Stack
Frontend

React

Next.js

TypeScript

Tailwind CSS

shadcn/ui

lucide-react icons

Backend

Node.js + Express

MongoDB + Mongoose

JWT Authentication

Bcrypt password hashing

📱 Responsive Design

The UI is optimized for:

📱 Mobile (small screens)

📐 Tablet

🖥️ Desktop
Layouts adjust automatically using Tailwind breakpoints, ensuring clean spacing, readability, and usability on all devices.

📡 API Integration (Frontend → Backend)

The frontend consumes the backend REST API using functions such as:

loginUser()

registerUser()

fetchTodos()

createTodo()

updateTodo()

deleteTodo()

Each call includes the JWT token stored in localStorage.

🔒 Authentication Flow

User registers or logs in

Backend returns a JWT token

Token is stored using:

saveToken(token)


Protected pages check authentication:

const token = getToken();
if (!token) router.push("/login");


Logout removes the token:

removeToken();
router.push("/login");

📂 Project Structure (Frontend)
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

🛠️ Running the Project
1. Clone the repo
git clone your-repo-url
cd your-project

2. Install dependencies
npm install

3. Run frontend
npm run dev

🧪 CRUD Features Demonstrated
1️⃣ Display Tasks

Fetch and render tasks from the database.

2️⃣ Add Task

Submit a title + optional description.

3️⃣ Toggle Completed

Switch completed: true/false using a checkbox or button.

4️⃣ Delete Task

Remove task using backend endpoint.

🎨 UI Design

The design uses:

Glassmorphism cards

Smooth gradients

Rounded components

Clean spacing

Lucide icons for modern visuals

🔐 Environment Variables (Frontend)

Create a .env.local:

NEXT_PUBLIC_API_URL=http://localhost:5000

❤️ Credits

Created by Zipporah, Full-Stack Developer.
Built as part of a full-stack project integrating frontend and backend skills.