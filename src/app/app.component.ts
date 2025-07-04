import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { HeaderComponent } from "./components/header/header.component";
import { AddListModalComponent } from "./components/add-list-modal/add-list-modal.component";
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SideNavComponent, HeaderComponent, AddListModalComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}
