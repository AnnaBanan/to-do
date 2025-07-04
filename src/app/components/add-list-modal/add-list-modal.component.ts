import { Component, signal, ViewChild, WritableSignal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoList } from '../../types';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item-component';
import { NgClass } from '@angular/common';

declare var bootstrap: any;

@Component({
    selector: 'app-add-list-modal',
    imports: [TodoInputComponent, FormsModule, TodoItemComponent, NgClass],
    templateUrl: './add-list-modal.component.html',
    styleUrl: './add-list-modal.component.scss'
})
export class AddListModalComponent {
  title: WritableSignal<string> = signal('');
  newList: WritableSignal<TodoList> = signal({
    title: '',
    todos: []
  });
  @ViewChild('newListForm') newListForm!: NgForm;

  constructor(private todoService: TodoService){}

  resetNewList(){
    this.title.set('');
    this.newList.set({
      title: '',
      todos: []
    });
    this.newListForm.resetForm();
  }

  updateTitle(){
    this.newList().title = this.title();
  }

  saveList(){
    this.updateTitle();
    this.todoService.addTodoList(this.newList());
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
