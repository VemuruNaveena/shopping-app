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
  universityService = inject(UniversityService);
  universityList: universityResponseApiI[] = [];

  constructor(){
    this.universitySearch();
  }

  universitySearch(): void{
    console.log('us');
    this.universityService.fetchData().subscribe(
      (response: universityResponseApiI[]) => {
        console.log(response);
        this.universityList = response;
        console.log(this.universityList);
        

      },
      (error: any) => {
        console.log('error');

      }

    )
  }

}
