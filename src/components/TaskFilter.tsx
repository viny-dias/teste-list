import { useTaskStore } from '../store/useTaskStore';

const TaskFilter = () => {
    const filterCompleted = useTaskStore(state => state.filterCompleted);
    const toggleCompletedFilter = useTaskStore(state => state.toggleCompletedFilter);

    return (
        <div className="mb-4">
            <button
                onClick={toggleCompletedFilter}
                className={`px-4 py-2 rounded-lg ${
                    filterCompleted 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-700'
                } hover:bg-blue-600 transition-colors`}
            >
                {filterCompleted ? 'Mostrar Todas' : 'Mostrar Concluídas'}
            </button>
        </div>
    );
};

export default TaskFilter;