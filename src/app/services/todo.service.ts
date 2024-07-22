import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private todoKey = 'todos';
  private doneItemsKey = 'doneItems'
  todosArray: string[] = [];
  doneItemsArray: string[] = [];

  constructor(private localStorage: LocalStorageService) {}

  initTodoService(){
    const initialTodos = this.localStorage.getLocalStorage(this.todoKey);
    if (initialTodos) {
      this.todosArray = JSON.parse(initialTodos);
    }
    const initialDoneItems = this.localStorage.getLocalStorage(this.doneItemsKey);
    if (initialDoneItems) {
      this.doneItemsArray = JSON.parse(initialDoneItems);
    }
  }

  updateLocalStorage(key: string, array: string[]){
    this.localStorage.setLocalStorage(key, JSON.stringify(array));
  }

  deleteTodo(name:string, id: number) {
    this.doneItemsArray.push(name);
    this.updateLocalStorage(this.doneItemsKey, this.doneItemsArray);
    this.todosArray.splice(id, 1);
    this.updateLocalStorage(this.todoKey, this.todosArray);
  }

  editTodo(id: number, value: string) {
    this.todosArray[id] = value;
    this.updateLocalStorage(this.todoKey, this.todosArray);
  }

  addTodo(name: string){
    this.todosArray.push(name);
    this.updateLocalStorage(this.todoKey, this.todosArray);
  }

  resetDoneItems() {
    this.doneItemsArray = [];
    this.localStorage.resetLocalStorage(this.doneItemsKey);
  }
}
