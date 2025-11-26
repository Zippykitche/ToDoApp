# Todo Backend


Node.js + Express + MongoDB (Mongoose) backend for the ToDoApp internship project.


## Setup
1. Copy files into `ToDoApp/backend`.
2. Run `cp .env.example .env` and fill `MONGO_URI` and `JWT_SECRET`.
3. Install dependencies: `npm install`.
4. Start dev server: `npm run dev` (requires nodemon).


## Endpoints
- POST /auth/register
- POST /auth/login
- POST /todos
- GET /todos
- GET /todos/:id
- PATCH /todos/:id
- DELETE /todos/:id


All `/todos` routes require `Authorization: Bearer <token>` header.


## Notes
- Token expires per `JWT_EXPIRES_IN` (.env.example default 24h).
- Basic validation and ownership checks are implemented.