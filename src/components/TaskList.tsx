
import { TaskListProps } from '../types/TaskListProps';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete }: TaskListProps) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;