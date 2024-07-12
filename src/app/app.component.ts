import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoServiceService } from './todo-service.service';
import { TodoItemComponentComponent } from './todo-item-component/todo-item-component.component';
import { TodoInputComponent } from './todo-input/todo-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoItemComponentComponent, TodoInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'To-do List';
  allTodos: string[];
  val='';

  constructor(private todoService: TodoServiceService) {
    this.allTodos = todoService.allTodos;
  }

}
