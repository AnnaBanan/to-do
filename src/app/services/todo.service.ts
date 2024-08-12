import { Injectable, signal, WritableSignal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TodoList } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private todoListsKey = 'todoLists';
  private doneItemsKey = 'doneItems'
  todoListsArray: WritableSignal<TodoList[]> = signal([]);

  todosArray: WritableSignal<string[]> = signal([]); // Todolist.todos
  doneItemsArray: string[] = [];

  constructor(private localStorage: LocalStorageService) {}

  initTodoService(){
    const initialTodos = this.localStorage.getLocalStorage(this.todoListsKey);
    if (initialTodos) {
      this.todoListsArray.set(JSON.parse(initialTodos));
    }
    const initialDoneItems = this.localStorage.getLocalStorage(this.doneItemsKey);
    if (initialDoneItems) {
      this.doneItemsArray = JSON.parse(initialDoneItems);
    }
  }

  updateLocalStorage(key: string, array: TodoList[] | string[]){
    this.localStorage.setLocalStorage(key, JSON.stringify(array));
  }


  addTodoList(newList: TodoList){
    this.todoListsArray().push(newList);
    this.updateLocalStorage(this.todoListsKey, this.todoListsArray());
  }

   // this is old 
  addTodo(name: string){
    this.todosArray().push(name);
    this.updateLocalStorage(this.todoListsKey, this.todoListsArray());
  }

  editTodo(id: number, value: string) {
    this.todosArray()[id] = value;
    this.updateLocalStorage(this.todoListsKey, this.todoListsArray());
  }

  deleteTodo(name:string, id: number) {
    this.doneItemsArray.push(name);
    this.updateLocalStorage(this.doneItemsKey, this.doneItemsArray);
    this.todosArray().splice(id, 1);
    this.updateLocalStorage(this.todoListsKey, this.todoListsArray());
  }

  resetDoneItems() {
    this.doneItemsArray = [];
    this.localStorage.resetLocalStorage(this.doneItemsKey);
  }
}
