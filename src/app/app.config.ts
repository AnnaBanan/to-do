import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item-component';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
