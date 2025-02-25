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


  courseL: string[] = ['Angular', 'React', 'vue'];
  course: any = {
    name: 'Node', 
    id: 'n_01'
  }
  // this.course.name


  courseList = [
    
    {name: 'Angular', version: 19},
    {name: 'React', version: 18},
    {name: 'vue', version: 4}
  ];

  updateCourseList() {
    // console.log(this.course);
    // debugger;
    // this.course.name = 'Node js';
    // //this.course.price = 10;
    // this.course['price'] = 20;
    // console.log(this.course);
    console.log(this.courseList);
debugger;
    let newObj = {name: 'Mongo DB', version: 6};
    this.courseList.unshift(newObj);
    console.log(this.courseList);
    
  }




  constructor(){
    console.log('con');
    this.search();
  }

  // i=3 l=3
  getDetails(id: string, price: number) {
    this.course.price = 20;
    this.course['price'] = 20;
    // for(let i=0; i<= this.courseList.length; i++) {
    //   console.log(this.courseList[i]);
    // }

    this.courseL.forEach((course) => {
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

