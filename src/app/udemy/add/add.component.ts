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
  catList = [];
  courseList = [];

  udemyService = inject(UdemyService);
  createCourseForm = new FormGroup({
    course_id: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    categoryType: new FormControl(),
  });
  // constructor(private udemyService: UdemyService) {}

  constructor() {
    this.udemyService.getAllCategories().subscribe(
      (response) => {
        console.log(response);
        this.catList = response['data'];
      },
      (error) => {
        console.log(error);
      }
    );
    this.getCourses();
  }

  getCourses() {
    this.udemyService.getAllCourses().subscribe(
      (response) => {
        console.log(response);
        this.courseList = response['data'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createCourse(): void {
    console.log(this.createCourseForm.value);
    this.udemyService.createCourseApi(this.createCourseForm.value).subscribe(
      (response: udemyApiI) => {
        console.log(response);
        this.createCourseForm.reset();
        this.getCourses();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
