import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-item-component',
  standalone: true,
  imports: [],
  templateUrl: './todo-item-component.component.html',
  styleUrl: './todo-item-component.component.scss',
})
export class TodoItemComponentComponent {
  @Input() openTodo = '';
  @Input() id: number;
  edit: boolean = false;
  @ViewChild('editInput') editInputElement: ElementRef;

  constructor(private todoService: TodoServiceService) {}

  deleteTodoItem() {
    this.todoService.deleteTodo(this.id);
  }

  editTodoItem() {
    this.edit = true;
  }

  changeTodo() {
    const value = this.editInputElement.nativeElement.value;
    this.todoService.editTodo(this.id, value)
    this.edit = false;
  }
}
