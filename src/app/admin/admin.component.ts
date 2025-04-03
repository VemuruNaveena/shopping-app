import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  navItems = [
    { label: 'Account Type', path: 'account' },
    { label: 'Category', path: 'category' },
  ];
}
