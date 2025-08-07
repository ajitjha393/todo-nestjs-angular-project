export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

export type CreateTodoDto = Omit<Todo, 'id' | 'completed'>;
export type UpdateTodoDto = Partial<Todo>;