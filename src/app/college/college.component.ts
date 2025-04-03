import { Component, inject } from '@angular/core';
import { CollegeService } from '../college.service';
import { universityResponseApiI } from '../university/university-interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-college',
  standalone: false,
  templateUrl: './college.component.html',
  styleUrl: './college.component.scss',
})
export class CollegeComponent {
  navItems = [
    { label: 'Student', path: '/college/student' },
    { label: 'Professor', path: '/college/professor' },
    { label: 'Admin', path: '/college/admin' },
  ];
}
