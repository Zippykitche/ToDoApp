"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = { onAdd: (title: string) => void };

const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <Card className="w-full bg-white p-4 rounded-2xl shadow">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Create your task here..."
          className="flex-1 border rounded-xl"
        />

        <Button
          type="submit"
          className="bg-purple-700 text-white rounded-xl px-4"
        >
          add
        </Button>
      </form>
    </Card>
  );
};

export default TodoForm;
