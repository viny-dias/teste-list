import { create } from 'zustand';
import { Task } from '../types/Task';
import { TaskFilterType } from '../types/TaskFilterType';

interface TaskStore {
    tasks: Task[];
    filterType: TaskFilterType;
    createTask: (task: Omit<Task, 'id' | 'completed'>) => void;
    editTask: (id: string, updatedTask: Partial<Task>) => void;
    deleteTask: (id: string) => void;
    markAllAsCompleted: () => void;
    deleteCompletedTasks: () => void;
    setFilterType: (filter: TaskFilterType) => void;
}

const generateId = () => {
    return crypto.randomUUID();
};

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    filterType: 'all',
    
    createTask: (task) => set((state) => ({
        tasks: [...state.tasks, {
            ...task,
            id: generateId(),
            completed: false
        }]
    })),

    editTask: (id, updatedTask) => set((state) => ({
        tasks: state.tasks.map((task: Task) => 
            task.id === id ? { ...task, ...updatedTask } : task
        )
    })),

    deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter((task: Task) => task.id !== id)
    })),

    markAllAsCompleted: () => set((state) => ({
        tasks: state.tasks.map((task: Task) => ({ ...task, completed: true }))
    })),

    deleteCompletedTasks: () => set((state) => ({
        tasks: state.tasks.filter((task: Task) => !task.completed)
    })),

    setFilterType: (filter) => set({ filterType: filter })
}));

export const selectFilteredTasks = (state: TaskStore): Task[] => {
    switch (state.filterType) {
        case 'completed':
            return state.tasks.filter(task => task.completed);
        case 'uncompleted':
            return state.tasks.filter(task => !task.completed);
        default:
            return state.tasks;
    }
};

export type { Task };