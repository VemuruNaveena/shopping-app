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

  title = 'shoppingApp';
  outfitName: string = 'Sherwani';
  outfitPrice: number  = 100;
  sizesAvailable: string[] = ['Small', 'Medium', 'Large',];
  outfitsAvailable: string[] = ['Sherwani', 'Jodhpuri Suit', 'Pathani Suit'];
  isOutfitAvailable: boolean = true;
  customer: any = {
    name: 'naveena',
    pno: '989-898-0987',
    isActive: true,
    fav: ['vido games', 'mobile games', 'pc-games'],
    address: '2990, lee hwy, apt: 309, fairfax, va, 22031',
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
    this.router.navigate(['women']);

//       this.showWomen = true;
//     this.showKids = false;
//     this.showMen = false;
// this.showHome = false;

  }
  onKidsSection() {
    this.router.navigate(['kids']);

//     this.showKids = true;
//     this.showMen = false;
// this.showHome = false;
// this.showWomen = false;

  }

  // this.customer.pno -- '989-898-0987'
  // this.customer.address - '2990, lee hwy, fairfax, va, 22031'
  // this.customer.shippingAddress.state - 'va'


 
bride(){
  console.log(this.customer.shippingAddress);
  console.log('woman');
  console.log(this.sizesAvailable[1]);
  console.log(this.outfitsAvailable.length);
  

}
groom()
{
  console.log('men');
}
bridesMaid()
{
  console.log('others');
}

}
