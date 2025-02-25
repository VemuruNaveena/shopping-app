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

        let updatedUniversitieList: universityResponseApiI[] = [];
        // i will go into each and evry object in the array
        response.forEach((univesity) => {
          univesity.review = 'Good';
          updatedUniversitieList.push(univesity);
        })
        this.universityList = updatedUniversitieList;
        console.log(this.universityList);
        

      },
      (error: any) => {
        console.log('error');

      }

    )
  }

}
