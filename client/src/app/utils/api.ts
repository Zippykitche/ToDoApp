const BASE_URL = "http://localhost:5000";

export const fetchTodos = async (token: string) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const createTodo = async (token: string, title: string, description?: string) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description }),
  });
  return res.json();
};

export const updateTodo = async (token: string, id: string, data: any) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteTodo = async (token: string, id: string) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
