import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { VehicleApiResponseI } from './home/home-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  httpClient = inject(HttpClient)

  constructor() { }

  fetchData(): Observable<VehicleApiResponseI>{
    console.log('xyz');
    const response = this.httpClient.get<VehicleApiResponseI>('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json');
    return response;
  }

}


// https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json - Get

// C - create  - Post
// R - retrieve - get
// U - Update - put
// D - Delete - delete
