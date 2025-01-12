import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { Task } from "../types/Task";

export function TaskManager() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editingTask, setEditingTask] = useState<Task | null>(null);

  
    useEffect(() => { 
      // @todo: Implementar a função para buscar os tasks da API
      setTasks([
        { id: 1, title: 'Task de exemplo', content: 'Conteúdo do task' },
      ]);
    }, []);
  
    const handleCreateTask = async (title: string, content: string) => {
      // @todo: Implementar a função para criar um novo task
      console.log('Criar task:', title, content);
    };
  
    const handleUpdateTask = async (title: string, content: string, id: number) => {
      // @todo: Implementar a função para atualizar um task existente
      console.log('Atualizar task:', id, title, content);
    };
  
    const handleDeleteTask = async (id: number) => {
      // @todo: Implementar a função para deletar um task
      console.log('Deletar task:', id);
    };
  
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <TaskForm
          onSubmit={handleCreateTask}
          onEdit={handleUpdateTask}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />
        <TaskList 
          tasks={tasks} 
          onEdit={setEditingTask} 
          onDelete={handleDeleteTask} 
        />
      </div>
    );

}