import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  course: any = {
    name: 'Angular',
    id: 10,
    fee: 50
  }

  someFun() {
    // {...this.course, fee: 100}
    // {name: 'Angular', id: 10, fee: 100}
  }

}
