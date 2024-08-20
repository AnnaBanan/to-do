import { Component, signal, WritableSignal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoList } from '../types';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item-component';
import { NgClass } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-add-list-modal',
  standalone: true,
  imports: [TodoInputComponent, FormsModule, TodoItemComponent, NgClass],
  templateUrl: './add-list-modal.component.html',
  styleUrl: './add-list-modal.component.scss'
})
export class AddListModalComponent {
  title: WritableSignal<string> = signal('');
  newList: TodoList;

  constructor(private todoService: TodoService){}

  ngOnInit(){
    this.resetNewList();
  }

  resetNewList(){
    this.newList = {
      title: '',
      todos: []
    };
  }

  updateTitle(){
    this.newList.title = this.title();
    this.title.set('');
  }

  saveList(){
    this.updateTitle();
    this.todoService.addTodoList(this.newList);
    this.resetNewList();

    const modalElement = document.getElementById('addListModal');

    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide(); // Modal schließen
      }
    }
  }
}
