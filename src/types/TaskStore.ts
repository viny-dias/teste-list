import { Task } from "./Task";

export interface TaskStore {
    tasks: Task[];
    createTask: (task: Omit<Task, 'id' | 'completed'>) => void;
    editTask: (id: string, updatedTask: Partial<Task>) => void;
    deleteTask: (id: string) => void;
    markAllAsCompleted: () => void;
    deleteCompletedTasks: () => void;
}