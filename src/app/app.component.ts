import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from "./side-nav/side-nav.component";
import { HeaderComponent } from "./header/header.component";
import { AddListModalComponent } from "./add-list-modal/add-list-modal.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent, HeaderComponent, AddListModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
