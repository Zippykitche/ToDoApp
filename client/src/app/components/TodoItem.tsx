import React from "react";
import { Trash2 } from "lucide-react";

type Props = {
  todo: any;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-purple-50 p-4 rounded-2xl shadow mb-3">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <div
          onClick={() => onToggle(todo._id, !todo.completed)}
          className={`w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer ${
            todo.completed ? "bg-green-400 border-green-600" : "border-gray-400"
          }`}
        >
          {todo.completed && (
            <span className="text-white text-sm font-bold">✔</span>
          )}
        </div>

        {/* Title */}
        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.title}
        </span>
      </div>

      {/* DELETE BUTTON */}
      <Trash2
        size={18}
        className="cursor-pointer text-gray-500 hover:text-red-600"
        onClick={() => onDelete(todo._id)}
      />
    </div>
  );
};

export default TodoItem;
