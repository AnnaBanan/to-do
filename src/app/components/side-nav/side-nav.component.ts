import { Component } from '@angular/core';
import { TodoList } from '../../types';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-side-nav',
    imports: [CommonModule, RouterLink],
    templateUrl: './side-nav.component.html',
    styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  todoListsMock: TodoList[] = [
    {
      title: 'Groceries',
      todos: ['Eggs', 'Bread', 'Milk']
    },
    {
      title: 'Chores',
      todos: ['Vacuum', 'Dishes', 'Laundry']
    },
    {
      title: 'Work',
      todos: ['Update docs', 'Email boss', 'Submit PR']
    }
  ];

  constructor(
    public menuService: MenuService,
    public todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.initTodoService();
    // this.todoListsMock.forEach(list => {
    //   this.todoService.addTodoList(list);
    // });
  }

}
