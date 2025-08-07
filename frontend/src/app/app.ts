import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo';

const routes: Routes = [
  { path: '', component: TodoComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, TodoComponent],
  templateUrl: './app.html',
})
@Injectable()
export class App {
  title = 'Todo Application';
}