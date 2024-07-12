import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TodoItemComponentComponent } from './todo-item-component/todo-item-component.component';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
