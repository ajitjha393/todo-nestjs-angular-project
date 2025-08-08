import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Todo, CreateTodoDto, UpdateTodoDto } from 'shared-types';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

createTodo(todo: CreateTodoDto): Observable<Todo> {
  return this.http.post<Todo>(this.apiUrl, todo)
  .pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 409) { // Conflict
        return throwError(() => 'Todo with this title already exists');
      }
      return throwError(() => 'An unexpected error occurred');
    })
  );
}
  updateTodo(id: number, todo: UpdateTodoDto): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}