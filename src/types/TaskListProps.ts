import { Task } from "./Task";

export interface TaskListProps {
    tasks: Task[];
    filterType: string;
    searchText: string;
    onEdit: (task: Task) => void;
}