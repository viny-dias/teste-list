import { Task } from "./Task";

export interface TaskListProps {
    onEdit: (task: Task) => void;
}