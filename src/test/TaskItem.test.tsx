import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../components/TaskItem';

const mockEditTask = vi.fn();
const mockDeleteTask = vi.fn();

vi.mock('../store/taskStore', () => ({
  useTaskStore: (selector) => {
    if (selector.toString().includes('editTask')) return mockEditTask;
    if (selector.toString().includes('deleteTask')) return mockDeleteTask;
    return vi.fn();
  }
}));

describe('TaskItem', () => {
  const mockTask = {
    id: '1',
    title: 'Teste Tarefa',
    content: 'Conteúdo da tarefa de teste',
    completed: false
  };

  const mockOnEdit = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('must correctly render task details', () => {
    render(<TaskItem task={mockTask} onEdit={mockOnEdit} />);

    expect(screen.getByText('Teste Tarefa')).toBeInTheDocument();
    expect(screen.getByText('Conteúdo da tarefa de teste')).toBeInTheDocument();
  });

  test('must call onEdit when the edit button is clicked', () => {
    render(<TaskItem task={mockTask} onEdit={mockOnEdit} />);

    const editButton = screen.getByText('Editar');
    fireEvent.click(editButton);

    expect(mockOnEdit).toHaveBeenCalledWith(mockTask);
  });

  test('should show the correct text in the completion button based on the task statusa', () => {
    render(<TaskItem task={mockTask} onEdit={mockOnEdit} />);
    expect(screen.getByText('Marcar como concluída')).toBeInTheDocument();

    const completedTask = { ...mockTask, completed: true };
    render(<TaskItem task={completedTask} onEdit={mockOnEdit} />);
    expect(screen.getByText('Concluída')).toBeInTheDocument(); 
  });
});