import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-courses',
  standalone: false,
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss',
})
export class AllCoursesComponent {
  @Input() courseListInput: any[];
}
