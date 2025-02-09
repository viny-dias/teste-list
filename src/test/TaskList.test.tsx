import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import TaskList from '../components/TaskList';

describe('TaskList', () => {
  const mockTasks = [
    { id: '1', title: 'Tarefa 1', content: 'Conteúdo 1', completed: false },
    { id: '2', title: 'Tarefa 2', content: 'Conteúdo 2', completed: true }
  ];

  test('should render task list correctly', () => {
    const mockOnEdit = vi.fn();

    render(
      <TaskList 
        tasks={mockTasks}
        filterType="all"
        searchText=""
        onEdit={mockOnEdit}
      />
    );

    expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 2')).toBeInTheDocument();
  });

  test('should show message when there are no tasks', () => {
    render(
      <TaskList 
        tasks={[]}
        filterType="all"
        searchText=""
        onEdit={() => {}}
      />
    );

    expect(screen.getByText('Nenhuma tarefa encontrada.')).toBeInTheDocument();
  });
});