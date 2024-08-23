import { Routes } from '@angular/router';
import { DoneListComponent } from './components/done-list/done-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'done', component: DoneListComponent },
  { path: 'todo-list/:index', component: TodoListComponent },
  { path: '', component: TodoListComponent },
  // { path: '', redirectTo: '/todo', pathMatch: 'full' }, we dont need to redirect to `todo`
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
