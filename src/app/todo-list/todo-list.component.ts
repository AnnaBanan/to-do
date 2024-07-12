import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { TodoItemComponentComponent } from '../todo-item-component/todo-item-component.component';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    TodoInputComponent,
    TodoItemComponentComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  title = 'To-do List';
  allTodos: string[];
  val = '';

  constructor(private todoService: TodoServiceService) {
    this.allTodos = todoService.allTodos;
  }
}
