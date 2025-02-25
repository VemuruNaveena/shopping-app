import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})


export class AppComponent {
  
  router = inject(Router);

  title = 'ShoppingApp';
  outfitName: string = 'Jeans';  //variables
  outfitPrice: number  = 100;
  sizesAvailable: string[] = ['Small', 'Medium', 'Large',];
  customer: any = {             //object
    name: 'naveena',
    pno: '989-898-0987',
    isActive: true,
    fav: ['vido games', 'mobile games', 'pc-games'],
    shippingAddress: {
      stNo: '2990, lee hw',
      apt: 308,
      city: 'Fairfax',
      state: 'va',
      zip: '22031'
    }
  }

  showHome: boolean = false;
  showMen: boolean = false;
  showWomen: boolean = false;
  showKids: boolean = false;

  onMenSection() {
    // this.showMen = true;
    // this.showHome = false;
    // this.showWomen= false;
    // this.showKids = false;
    this.router.navigate(['men']);
  }

  onHomeSection() {
    // this.showHome = true;
    // this.showMen = false;
    // this.showWomen= false;
    // this.showKids = false;
    this.router.navigate(['home']);
  }
  onWomenSection() {
  //  this.showWomen = true;
  //  this.showKids = false;
  //  this.showMen = false;
  //  this.showHome = false;
  this.router.navigate(['women']);

  }
  onKidsSection() {
    // this.showKids = true;
    // this.showMen = false;
    // this.showHome = false;
    // this.showWomen = false;
    this.router.navigate(['kids']);

  }

  onUniversitySection(){

    this.router.navigate(['university']);
    
  }

  navigateToGames() {
    this.router.navigate(['games']);
  }

 

}