import { TaskListProps } from '../types/TaskListProps';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, filterType, searchText, onEdit }: TaskListProps) => {
    
    const filteredTasks = tasks.filter(task => {
        // Text filter
        const matchesSearch = searchText 
            ? task.title.toLowerCase().includes(searchText.toLowerCase()) ||
              task.content.toLowerCase().includes(searchText.toLowerCase())
            : true;

        // Status filter
        const matchesStatus = filterType === 'all' 
            ? true 
            : filterType === 'completed' 
                ? task.completed 
                : !task.completed;

        return matchesSearch && matchesStatus;
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