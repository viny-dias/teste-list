import { Task } from "./Task";


export interface TaskFormProps {
    onSubmit: (title: string, content: string) => void;
    onEdit?: (title: string, content: string, id: number) => void;
    editingTask: Task | null;
    setEditingTask: (task: Task | null) => void;
}