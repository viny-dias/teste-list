import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import TaskFilter from '../components/TaskFilter';
import { create } from 'zustand';

const createTestStore = (initialState = {}) => 
  create((set) => ({
    filterType: 'all',
    setFilterType: (type) => set({ filterType: type }),
    ...initialState,
  }));

const renderWithStore = (ui, store) => {
  const Wrapper = ({ children }) => {
    return children;
  };
  
  return render(ui, { wrapper: Wrapper });
};

describe('TaskFilter', () => {
    test('render filters with initial state', () => {
        const store = createTestStore();
        renderWithStore(<TaskFilter />, store);
        
        expect(screen.getByText('Todas')).toBeInTheDocument();
        expect(screen.getByText('Concluídas')).toBeInTheDocument();
        expect(screen.getByText('Não Concluídas')).toBeInTheDocument();
    });

    test('starts with specific filter', () => {
        const store = createTestStore({ filterType: 'completed' });
        renderWithStore(<TaskFilter />, store);
        
        expect(screen.getByText('Concluídas'));
    });
});