import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  router = inject(Router);

  name = 'Angular';

  navItems: any[] = [
    { routePath: 'home', label: 'Home' },
    { routePath: 'men', label: 'Men' },
    { routePath: 'women', label: 'Women' },
    { routePath: 'kids', label: 'Kids' },
    { routePath: 'university', label: 'University' },
    { routePath: 'games', label: 'Games' },
    { routePath: 'college', label: 'COllege' },
    { routePath: 'users', label: 'User' },
    { routePath: 'signup', label: 'Signup' },
    { routePath: 'login', label: 'Login' },
    { routePath: 'Udemy', label: 'Udemy' },
  ];

  // navigateTo(path: string) {
  //   this.router.navigate([path]);
  // }

  runFunction() {
    this.name = 'React';
  }
}
