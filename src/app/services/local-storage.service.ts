import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  setLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  resetLocalStorage(key: string) {
    localStorage.removeItem(key)
  }
}
