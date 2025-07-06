import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { TodoItemComponent } from "../todo-item/todo-item-component";
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-done-list',
    imports: [RouterLink, RouterLinkActive, TodoItemComponent],
    templateUrl: './done-list.component.html',
    styleUrl: './done-list.component.scss'
})
export class DoneListComponent {
  doneItems: string[] = []
  constructor(private todoService: TodoService) {}
  ngOnInit(){
    this.todoService.initTodoService();
    this.doneItems = this.todoService.doneItemsArray
  }

  deleteAllDoneItems() {
    this.todoService.resetDoneItems();
    this.doneItems = this.todoService.doneItemsArray
  }
}
