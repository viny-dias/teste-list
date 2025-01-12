import { TaskListProps } from '../types/TaskListProps';
import { useTaskStore } from '../store/useTaskStore';
import TaskItem from './TaskItem';

const TaskList = ({ onEdit }: TaskListProps) => {
  const tasks = useTaskStore(state => state.tasks);

  if (tasks.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        Nenhuma tarefa criada ainda.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;