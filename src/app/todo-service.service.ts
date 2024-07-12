import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  allTodos = ['test', 'test2', 'test3'];
  constructor() {}

  deleteTodo(id: number) {
    this.allTodos.splice(id, 1);
  }

  editTodo(id: number, value: string) {
    this.allTodos[id] = value;
  }
  
  addTodo(name: string) {
    this.allTodos.push(name);
  }
}
