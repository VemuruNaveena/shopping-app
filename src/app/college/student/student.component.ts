import { Component, inject } from '@angular/core';
import { CollegeService } from '../../college.service';
import { universityResponseApiI } from '../../university/university-interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent {
  collegeService = inject(CollegeService);
  collegeList: universityResponseApiI[] = [];
  errorMessage = 'Something went wrong';
  isError: boolean = false;
  selectedCountryName = '';

  seachForm = new FormGroup({
    countryName: new FormControl('', [Validators.required]),
    // cityName: new FormControl(),
  });

  seachByCountry() {
    console.log(this.seachForm);
    console.log(this.seachForm.value);
    console.log(this.seachForm.value.countryName);

    this.collegeService
      .fetchByCountry(this.seachForm.value.countryName)
      .subscribe(
        (response: universityResponseApiI[]) => {
          console.log(response);
          this.collegeList = response;
          this.isError = false;
        },
        (error) => {
          console.log(error);
          this.isError = true;
          this.collegeList = [];
        }
      );
  }
}
