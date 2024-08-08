import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isActive: WritableSignal<boolean> = signal(false);
  constructor() { }

  toggleMenu() {
    this.isActive.update(isActive => !isActive);
  }
}
