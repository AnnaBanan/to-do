import { Routes } from '@angular/router';
import { DoneListComponent } from './done-list/done-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'done', component: DoneListComponent },
  { path: 'todo', component: TodoListComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' }, // redirect to `todo`
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
