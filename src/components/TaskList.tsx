import { TaskListProps } from '../types/TaskListProps';
import { useTaskStore } from '../store/useTaskStore';
import TaskItem from './TaskItem';

const TaskList = ({ onEdit }: TaskListProps) => {
    const tasks = useTaskStore(state => state.tasks);
    const filterType = useTaskStore(state => state.filterType);
    
    const filteredTasks = tasks.filter(task => {
        switch (filterType) {
            case 'completed':
                return task.completed;
            case 'uncompleted':
                return !task.completed;
            default:
                return true;
        }
    });

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