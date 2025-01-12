import { Task } from "./Task";
import { TaskFilterType } from "./TaskFilterType";

export interface TaskStore {
    tasks: Task[];
    filterType: TaskFilterType;
    searchText: string;
    createTask: (task: Omit<Task, 'id' | 'completed'>) => void;
    editTask: (id: string, updatedTask: Partial<Task>) => void;
    deleteTask: (id: string) => void;
    markAllAsCompleted: () => void;
    deleteCompletedTasks: () => void;
    setFilterType: (filter: TaskFilterType) => void;
    setSearchText: (text: string) => void;
}