import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item-component';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
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
  TodoList: boolean;
  id = Number(this.route.snapshot.paramMap.get('index'));


  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.todoService.initTodoService();
    this.getTodoList(this.id);
  }

  ngDoCheck() {
    const id = Number(this.route.snapshot.paramMap.get('index'));
    if (id !== this.id) {
      this.id = id;
      this.getTodoList(id);
    }
  }
  
  getTodoList(id: number) {
    if (this.todoService.todoListsArray().length >= id) { 
      this.TodoList = true;
      this.allTodos = this.todoService.todoListsArray()[id].todos;
    } 
    else { 
      this.TodoList = false;
    }
  }
  
}
