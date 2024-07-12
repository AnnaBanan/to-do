import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-done-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './done-list.component.html',
  styleUrl: './done-list.component.scss',
})
export class DoneListComponent {}
