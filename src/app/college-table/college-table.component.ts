import { Component, Input } from '@angular/core';
import { universityResponseApiI } from '../university/university-interfaces';

@Component({
  selector: 'app-college-table',
  standalone: false,
  templateUrl: './college-table.component.html',
  styleUrl: './college-table.component.scss',
})
export class CollegeTableComponent {
  @Input() collegeList: universityResponseApiI[];
}
