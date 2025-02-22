import { Component, inject } from '@angular/core';
import { HomeService } from '../home.service';
import { CourseI, VehicleApiResponseI, VehicleDetailsI } from './home-interfaces';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name: string = 'Api topic';

  homeService = inject(HomeService);
  vehicleList: VehicleDetailsI[] = [];

  courseList: string[] = ['Angular', 'React', 'vue'];
  course: CourseI = {
    name: 'Node', 
    id: 'n_01'
  }
  // this.course.name


  constructor(){
    console.log('con');
    this.search();
  }

  // i=3 l=3
  getDetails(id: string, price: number) {
    // for(let i=0; i<= this.courseList.length; i++) {
    //   console.log(this.courseList[i]);
    // }

    this.courseList.forEach((course) => {
      console.log(course);
    })

  }
 

  search(): void{
    console.log('abc');
    this.homeService.fetchData().subscribe(
      (response: VehicleApiResponseI) => {
        console.log(response);
        this.vehicleList = response.Results;
        console.log(this.vehicleList)
      },
      (error: any) => {
        console.log(error)
      }
    )
  }



}

// () {
    
// }

//() => {

// }

// (id: string) => {

// }

