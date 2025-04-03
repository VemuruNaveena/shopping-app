import { Component, inject } from '@angular/core';
import { UniversityService } from '../university.service';
import { universityResponseApiI } from './university-interfaces';



@Component({
  selector: 'app-university',
  standalone: false,
  templateUrl: './university.component.html',
  styleUrl: './university.component.scss'
})
export class UniversityComponent {

  submitForm() {
    
  }

}
