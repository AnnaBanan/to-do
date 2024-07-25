import { Component, signal, WritableSignal } from '@angular/core';
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
  name: WritableSignal<string> =  signal('');
  constructor (private todoService: TodoService) {}

  updateTodos() {
    this.todoService.addTodo(this.name());
    this.name.set('');
  }
}
