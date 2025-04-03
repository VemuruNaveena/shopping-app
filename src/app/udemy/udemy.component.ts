import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UdemyService } from '../udemy.service';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-udemy',
  standalone: false,
  templateUrl: './udemy.component.html',
  styleUrl: './udemy.component.scss',
})
export class UdemyComponent {
  navItems = [
    { label: 'Add Course', path: '/udemy/add' },
    { label: 'Buy Course', path: '/udemy/buy' },
    { label: 'Purchase Course', path: '/udemy/purchase' },
    { label: 'Udemy Profile', path: '/udemy/update' },
  ];
}
