"use client";

import React, { useEffect, useState } from "react";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "./utils/api";
import { getToken, removeToken } from "./utils/auth";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
  const router = useRouter();
  const token = getToken();
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    if (!token) router.push("/login");
  }, [token, router]);

  const loadTodos = async () => {
    if (!token) return;
    const data = await fetchTodos(token);
    setTodos(data.todos || data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (title: string, description?: string) => {
    if (!token) return;
    await createTodo(token, title, description);
    loadTodos();
  };

  const handleToggle = async (id: string, completed: boolean) => {
    if (!token) return;
    await updateTodo(token, id, { completed });
    loadTodos();
  };

  const handleDelete = async (id: string) => {
    if (!token) return;
    await deleteTodo(token, id);
    loadTodos();
  };

  const handleLogout = () => {
    removeToken();
    router.push("/login");
  };

  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">

      <div className="w-full sm:max-w-md md:max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8">

        {/* Logout button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm sm:text-base bg-purple-600 text-white rounded-lg hover:bg-purple-400 transition"
          >
            Logout
          </button>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center">
          My Todos
        </h1>

        <TodoForm onAdd={handleAdd} />

        <div className="mt-6 space-y-3">
          {todos.length ? (
            todos.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No todos yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
