import { useTaskStore } from '../store/useTaskStore';
import { ChangeEvent } from 'react';

const TaskSearch = () => {
    const setSearchText = useTaskStore(state => state.setSearchText);
    const searchText = useTaskStore(state => state.searchText);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Search text:', e.target.value);
        setSearchText(e.target.value);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Buscar tarefas..."
                value={searchText}
                onChange={handleSearch}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default TaskSearch;