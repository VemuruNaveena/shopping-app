import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men',
  standalone: false,
  templateUrl: './men.component.html',
  styleUrl: './men.component.scss',
})
export class MenComponent {
  router = inject(Router);

  navigateTo(path: string) {
    this.router.navigate([`men/${path}`]);
  }
}
