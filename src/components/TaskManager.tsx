import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useTaskStore } from "../store/useTaskStore";
import { Task } from "../types/Task";

export function TaskManager() {
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    
    const initializeTasks = useTaskStore(state => state.createTask);

    useEffect(() => { 
      initializeTasks({
        title: 'Task de exemplo',
        content: 'Conteúdo do task'
      });
    }, [initializeTasks]);

    return (
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <TaskForm
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />
        <TaskList 
          onEdit={setEditingTask}
        />
      </div>
    );
}