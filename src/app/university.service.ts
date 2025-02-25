import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { universityResponseApiI } from './university/university-interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  
  httpClient = inject(HttpClient);
  
  constructor() { }
  
  fetchData(): Observable<universityResponseApiI[]>{
    console.log('univ fetch');
    const response = this.httpClient.get<universityResponseApiI[]>('http://universities.hipolabs.com/search?country=United+Kingdom');
    return response;
  }
  
}
