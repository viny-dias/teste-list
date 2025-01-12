import { create } from 'zustand';
import { Task } from '../types/Task';
import { TaskStore } from '../types/TaskStore';
import { persist } from 'zustand/middleware';


const generateId = () => {
    return crypto.randomUUID();
};


export const useTaskStore = create<TaskStore>()(
    persist(
        (set) => ({
            tasks: [],
            filterType: 'all',
            searchText: '',
            
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

            setFilterType: (filter) => set({ filterType: filter }),
            
            setSearchText: (text) => set({ searchText: text })
        }),
        {
            name: 'task-storage',
            skipHydration: false,
            partialize: (state) => ({ 
                tasks: state.tasks
            })
        }
    )
);

export const selectFilteredTasks = (state: TaskStore): Task[] => {
    const textFiltered = state.searchText
        ? state.tasks.filter(task => 
            task.title.toLowerCase().includes(state.searchText.toLowerCase()) ||
            task.content.toLowerCase().includes(state.searchText.toLowerCase())
        )
        : state.tasks;

    switch (state.filterType) {
        case 'completed':
            return textFiltered.filter(task => task.completed);
        case 'uncompleted':
            return textFiltered.filter(task => !task.completed);
        default:
            return textFiltered;
    }
};

export type { Task };