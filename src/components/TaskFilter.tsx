import { useTaskStore } from '../store/useTaskStore';
import { TaskFilterType } from '../types/TaskFilterType';

const TaskFilter = () => {
    const filterType = useTaskStore(state => state.filterType);
    const setFilterType = useTaskStore(state => state.setFilterType);

    const getButtonStyle = (type: TaskFilterType) => {
        return `px-4 py-2 rounded-lg mr-2 ${
            filterType === type
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
        } hover:bg-blue-600 transition-colors`;
    };

    return (
        <>
            <h2 className="block text-gray-700 font-bold mb-4">Filtro de tarefas</h2>
            <div className="mb-4 flex flex-wrap gap-2">

                <button
                    onClick={() => setFilterType('all')}
                    className={getButtonStyle('all')}
                >
                    Todas
                </button>
                <button
                    onClick={() => setFilterType('completed')}
                    className={getButtonStyle('completed')}
                >
                    Concluídas
                </button>
                <button
                    onClick={() => setFilterType('uncompleted')}
                    className={getButtonStyle('uncompleted')}
                >
                    Não Concluídas
                </button>
            </div>
        </>
    );
};

export default TaskFilter;