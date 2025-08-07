import { Injectable } from '@nestjs/common';
import { Todo, CreateTodoDto, UpdateTodoDto } from 'shared-types';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Learn NestJS', completed: false },
    { id: 2, title: 'Learn Angular', completed: false },
  ];
  private nextId = 3;

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      completed: false,
      ...createTodoDto,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Todo | undefined {
    const todo = this.findOne(id);
    if (!todo) return undefined;
    
    Object.assign(todo, updateTodoDto);
    return todo;
  }

  remove(id: number): boolean {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) return false;
    
    this.todos.splice(index, 1);
    return true;
  }
}