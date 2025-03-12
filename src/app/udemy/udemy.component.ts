import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UdemyService } from '../udemy.service';

@Component({
  selector: 'app-udemy',
  standalone: false,
  templateUrl: './udemy.component.html',
  styleUrl: './udemy.component.scss',
})
export class UdemyComponent {
  udemyService = inject(UdemyService);
  searchForm = new FormGroup({
    course_id: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    Price: new FormControl(),
    categoryType: new FormControl(),
  });

  createCourse() {
    console.log(this.searchForm);
    console.log(this.searchForm.value);
    this.udemyService.createCourseApi(this.searchForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
