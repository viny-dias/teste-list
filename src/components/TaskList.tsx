import { TaskListProps } from '../types/TaskListProps';
import { useTaskStore } from '../store/useTaskStore';
import TaskItem from './TaskItem';

const TaskList = ({ onEdit }: TaskListProps) => {
  const tasks = useTaskStore(state => state.tasks);
  const filterCompleted = useTaskStore(state => state.filterCompleted);
  
  const filteredTasks = filterCompleted 
      ? tasks.filter(task => task.completed)
      : tasks;

  if (filteredTasks.length === 0) {
      return (
          <div className="text-center text-gray-500 py-8">
              Nenhuma tarefa encontrada.
          </div>
      );
  }

  return (
      <div className="space-y-4">
          {filteredTasks.map((task) => (
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