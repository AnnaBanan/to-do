import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item-component';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    TodoInputComponent,
    TodoItemComponent,
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

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.initTodoService();
    this.allTodos = this.todoService.todosArray();
  }
}
