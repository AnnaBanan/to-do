import { Component, Input, signal, WritableSignal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
import { TodoList } from '../../types';

@Component({
    selector: 'app-todo-input',
    templateUrl: './todo-input.component.html',
    styleUrl: './todo-input.component.scss',
    imports: [FormsModule]
})
export class TodoInputComponent {
  @Input() activeList: TodoList;
  name: WritableSignal<string> =  signal('');
  constructor (private todoService: TodoService) {}

  updateTodos() {
    this.todoService.addTodo(this.activeList, this.name());
    this.name.set('');
  }
}
