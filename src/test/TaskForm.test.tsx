import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import TaskForm from '../components/TaskForm';
import userEvent from '@testing-library/user-event';

// Mock do useTaskStore
vi.mock('../store/taskStore', () => ({
  useTaskStore: () => ({
    createTask: vi.fn(),
    editTask: vi.fn()
  })
}));

describe('TaskForm', () => {
  const mockSetEditingTask = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('deve renderizar o formulário para criar nova tarefa', () => {
    render(<TaskForm editingTask={null} setEditingTask={mockSetEditingTask} />);

    expect(screen.getByTestId('title-input')).toBeInTheDocument();
    expect(screen.getByTestId('content-input')).toBeInTheDocument();
    expect(screen.getByText('Criar')).toBeInTheDocument();
    expect(screen.queryByText('Cancelar')).not.toBeInTheDocument();
  });

  test('deve renderizar o formulário para editar tarefa existente', () => {
    const mockTask = {
      id: '1',
      title: 'Tarefa Teste',
      content: 'Conteúdo Teste',
      completed: false
    };

    render(<TaskForm editingTask={mockTask} setEditingTask={mockSetEditingTask} />);

    expect(screen.getByTestId('title-input')).toHaveValue('Tarefa Teste');
    expect(screen.getByTestId('content-input')).toHaveValue('Conteúdo Teste');
    expect(screen.getByText('Atualizar')).toBeInTheDocument();
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
  });

  test('deve limpar o formulário ao clicar em cancelar', async () => {
    const mockTask = {
      id: '1',
      title: 'Tarefa Teste',
      content: 'Conteúdo Teste',
      completed: false
    };

    render(<TaskForm editingTask={mockTask} setEditingTask={mockSetEditingTask} />);

    const cancelButton = screen.getByTestId('cancel-button');
    await userEvent.click(cancelButton);

    expect(mockSetEditingTask).toHaveBeenCalledWith(null);
  });
});