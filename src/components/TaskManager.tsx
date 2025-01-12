import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";
import { Task } from "../store/useTaskStore";

export function TaskManager() {
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <TaskForm
                editingTask={editingTask}
                setEditingTask={setEditingTask}
            />
            <TaskFilter />
            <TaskList 
                onEdit={setEditingTask}
            />
        </div>
    );
}