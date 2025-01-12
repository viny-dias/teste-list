import { TaskItemProps } from "../types/TaskItemProps";
import { useTaskStore } from '../store/useTaskStore';

const TaskItem = ({ task, onEdit }: TaskItemProps) => {
  const editTask = useTaskStore(state => state.editTask);
  const deleteTask = useTaskStore(state => state.deleteTask);

  const handleToggleComplete = () => {
    editTask(task.id, { completed: !task.completed });
  };

  return (
    <div className="p-4 bg-gray-50 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">{task.title}</h2>
      <p className="text-gray-600">{task.content}</p>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Editar
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Excluir
        </button>
        <button
          onClick={handleToggleComplete}
          className={`px-4 py-2 rounded-lg ${
            task.completed 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-gray-500 hover:bg-gray-600'
          } text-white`}
        >
          {task.completed ? 'Concluída' : 'Marcar como concluída'}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;