import { Component, signal, WritableSignal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoList } from '../types';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item-component';

declare var bootstrap: any;

@Component({
  selector: 'app-add-list-modal',
  standalone: true,
  imports: [TodoInputComponent, FormsModule, TodoItemComponent],
  templateUrl: './add-list-modal.component.html',
  styleUrl: './add-list-modal.component.scss'
})
export class AddListModalComponent {
  title: WritableSignal<string> = signal('');
  newList: TodoList = {
    title: 'unknown',
    todos: []
  };

  constructor(private todoService: TodoService){}

  updateTitle(){
    this.newList.title = this.title();
  }

  saveList(){
    console.log(this.todoService.todoListsArray());
    this.todoService.addTodoList(this.newList);
    console.log(this.todoService.todoListsArray());

    const modalElement = document.getElementById('addListModal');

    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide(); // Modal schließen
      }
    }
  }
}
