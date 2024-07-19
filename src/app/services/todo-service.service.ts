import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  allTodos = ['test', 'test2', 'test3'];

  private todoKey = 'todos';
  todosArray: string[] = ['testhaha', 'test2rrfg', 'test3dga'];

  constructor(private localStorage: LocalStorageService) {}

  initTodoService(){
    const initial = this.localStorage.getLocalStorage(this.todoKey);
    if (initial) {
      this.todosArray = JSON.parse(initial);
    }
  }

  updateLocalStorage(){
    this.localStorage.setLocalStorage(this.todoKey, JSON.stringify(this.todosArray));
  }

  deleteTodo(id: number) {
    this.todosArray.splice(id, 1);
    this.updateLocalStorage();
  }

  editTodo(id: number, value: string) {
    this.todosArray[id] = value;
    this.updateLocalStorage()
  }

  addTodo(name: string){
    this.todosArray.push(name);
    this.updateLocalStorage();
  }
}
