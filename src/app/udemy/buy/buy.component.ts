import { Component, inject } from '@angular/core';
import { UdemyService } from '../../udemy.service';

@Component({
  selector: 'app-buy',
  standalone: false,
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.scss',
})
export class BuyComponent {
  udemyService = inject(UdemyService);

  UnEnrolledCourses = [];
  selectedCoursesToPurchase = [];

  ngOnInit() {
    this.udemyService.fetchUnEnrolledCourses().subscribe(
      (response) => {
        console.log(response);
        this.UnEnrolledCourses = response['data'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onCheckboxChange(event: any, course) {
    console.log(course);
    if (event.target.checked) {
      // add course to array
      this.selectedCoursesToPurchase.push(course);
      console.log(this.selectedCoursesToPurchase);
    } else {
      // remove course from array
    }
  }

  buyCourses() {
    console.log(this.selectedCoursesToPurchase);
  }
}
