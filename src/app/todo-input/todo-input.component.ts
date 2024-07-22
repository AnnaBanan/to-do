import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss',
  imports: [FormsModule]
})
export class TodoInputComponent {
  name: string = '';
  constructor (private todoService: TodoService) {}

  updateTodos() {
    this.todoService.addTodo(this.name);
    this.name='';
  }
}
