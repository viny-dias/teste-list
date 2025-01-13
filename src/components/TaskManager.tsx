import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";
import TaskSearch from "./TaskSearch";
import { Task, useTaskStore } from "../store/useTaskStore";

export function TaskManager() {
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const tasks = useTaskStore(state => state.tasks);
    const filterType = useTaskStore(state => state.filterType);
    const searchText = useTaskStore(state => state.searchText);

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <TaskForm
                editingTask={editingTask}
                setEditingTask={setEditingTask}
            />
            <TaskSearch />
            <TaskFilter />
            <TaskList 
                tasks={tasks}
                filterType={filterType}
                searchText={searchText}
                onEdit={setEditingTask}
            />
        </div>
    );
}