import { useState, useEffect, FormEvent } from 'react';
import { TaskFormProps } from '../types/TaskFormProps';

const TaskForm = ({ onSubmit, onEdit, editingTask, setEditingTask }: TaskFormProps) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setContent(editingTask.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingTask]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingTask && onEdit) {
        onEdit(title, content, editingTask.id);
    } else {
        onSubmit(title, content);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Título</label>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Conteúdo</label>
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          {editingTask ? 'Atualizar' : 'Criar'}
        </button>
        {editingTask && (
          <button
            type="button"
            onClick={() => setEditingTask(null)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;