import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Todo, CreateTodoDto, UpdateTodoDto } from 'shared-types';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: CreateTodoDto = { title: '', description: '' };
  isLoading = true;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.isLoading = true;
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load todos', err);
        this.isLoading = false;
      }
    });
  }

  addTodo(): void {
    if (!this.newTodo.title.trim()) return;
    
    this.todoService.createTodo(this.newTodo).subscribe({
      next: () => {
        this.loadTodos();
        this.newTodo = { title: '', description: '' };
      },
      error: (err) => console.error('Failed to create todo', err)
    });
  }

  toggleComplete(todo: Todo): void {
    const update: UpdateTodoDto = { completed: !todo.completed };
    this.todoService.updateTodo(todo.id, update).subscribe({
      next: () => this.loadTodos(),
      error: (err) => console.error('Failed to update todo', err)
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe({
      next: () => this.loadTodos(),
      error: (err) => console.error('Failed to delete todo', err)
    });
  }
}