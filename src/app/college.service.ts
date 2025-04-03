import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { universityResponseApiI } from './university/university-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  http = inject(HttpClient);

  fetchByCountry(
    selectedCountryName: string
  ): Observable<universityResponseApiI[]> {
    console.log(selectedCountryName);
    const response = this.http.get<universityResponseApiI[]>(
      `http://universities.hipolabs.com/search?country=${selectedCountryName}`
    );
    return response;
  }
}
