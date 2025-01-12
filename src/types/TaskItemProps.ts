import { Task } from "./Task";

export interface TaskItemProps {
    task: Task;
    onEdit: (task: Task) => void;
}