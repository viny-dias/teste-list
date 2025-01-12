import { create } from 'zustand';
import { Task } from '../types/Task';
import { TaskStore } from '../types/TaskStore';

const generateId = () => {
    return crypto.randomUUID();
};

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    filterCompleted: false,
    
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

    toggleCompletedFilter: () => set((state) => ({
        filterCompleted: !state.filterCompleted
    }))
}));

export const selectFilteredTasks = (state: TaskStore): Task[] => {
    return state.filterCompleted 
        ? state.tasks.filter(task => task.completed) 
        : state.tasks;
};

export type { Task };