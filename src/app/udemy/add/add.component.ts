import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UdemyService } from '../../udemy.service';
import { udemyApiI } from '../udemy interfaces';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  udemyService = inject(UdemyService);
  searchForm = new FormGroup({
    course_id: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    categoryType: new FormControl(),
  });
  // constructor(private udemyService: UdemyService) {}

  createCourse(): void {
    console.log(this.searchForm);
    console.log(this.searchForm.value);
    this.udemyService.createCourseApi(this.searchForm.value).subscribe(
      (response: udemyApiI) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
