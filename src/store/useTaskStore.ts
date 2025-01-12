import { create } from 'zustand';
import { Task } from '../types/Task';
import { TaskStore } from '../types/TaskStore';

const generateId = () => {
    return crypto.randomUUID();
};

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    
    createTask: (task) => set((state) => ({
        tasks: [...state.tasks, {
            ...task,
            id: generateId(),
            completed: false
        }]
    })),

    editTask: (id, updatedTask) => set((state) => ({
        tasks: state.tasks.map(task => 
            task.id === id ? { ...task, ...updatedTask } : task
        )
    })),

    deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== id)
    })),

    markAllAsCompleted: () => set((state) => ({
        tasks: state.tasks.map(task => ({ ...task, completed: true }))
    })),

    deleteCompletedTasks: () => set((state) => ({
        tasks: state.tasks.filter(task => !task.completed)
    }))
}));

export type { Task };