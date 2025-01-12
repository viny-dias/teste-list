import { Task } from "./Task";


export interface TaskFormProps {
    editingTask: Task | null;
    setEditingTask: (task: Task | null) => void;
}