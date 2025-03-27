import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../user-profile.service';
import { CartService } from '../cart.service';
import { GameI } from '../games/games-interface';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  router = inject(Router);
  userProfileService = inject(UserProfileService);
  cartService = inject(CartService);

  loggedInUsername: string;
  loggedInRole: string;
  noOfItemsAddedToCart: number = 0;

  name = 'Angular';

  navItems: any[] = [
    { routePath: 'home', label: 'Home' },
    { routePath: 'men', label: 'Men' },
    { routePath: 'women', label: 'Women' },
    { routePath: 'kids', label: 'Kids' },
    { routePath: 'university', label: 'University' },
    { routePath: 'games', label: 'Games' },
    { routePath: 'college/student', label: 'College' },
    { routePath: 'users', label: 'User' },
    { routePath: 'signup', label: 'Signup' },
    { routePath: 'login', label: 'Login' },
    { routePath: 'udemy/add', label: 'Udemy' },
    { routePath: 'admin', label: 'Admin' },
  ];

  ngOnInit() {
    this.userProfileService.userProfileInfo.subscribe(
      (data: string) => {
        console.log(data);
        this.loggedInUsername = data;
      },
      () => {}
    );

    this.userProfileService.userProfileData.subscribe(
      (role: string) => {
        console.log(role);
        this.loggedInRole = role;
      },
      () => {}
    );

    this.cartService.gamesListBs.subscribe(
      (games) => {
        console.log(games);
        this.noOfItemsAddedToCart = games.length;
      },
      () => {}
    );
  }

  // navigateTo(path: string) {
  //   this.router.navigate([path]);
  // }

  runFunction() {
    this.name = 'React';
  }

  // getUserName() {
  //   this.loggedInUsername = this.userProfileService.userName;
  // }
}
