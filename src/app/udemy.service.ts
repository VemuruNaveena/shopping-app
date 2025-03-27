import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { udemyApiI } from './udemy/udemy interfaces';

@Injectable({
  providedIn: 'root',
})
export class UdemyService {
  http = inject(HttpClient);

  createCourseApi(course: udemyApiI) {
    // logic to add custom token.
    const headers = new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2NhNGNjNzE1NDAxYzJiMThiMzljMjkiLCJpYXQiOjE3NDE5MTM3OTR9.garlF-MVF80oTngqbsXLUuEM5FLRIUuPvQrGf5ScMOE`,
    });
    const response = this.http.post<udemyApiI>(
      'http://localhost:3010/api/createCourse',
      course,
      { headers: headers }
    );
    return response;
  }

  getAllCategories() {
    const headers = new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2NhNGNjNzE1NDAxYzJiMThiMzljMjkiLCJpYXQiOjE3NDE5MTM3OTR9.garlF-MVF80oTngqbsXLUuEM5FLRIUuPvQrGf5ScMOE`,
    });
    const response = this.http.get('http://localhost:3010/api/categories', {
      headers: headers,
    });
    return response;
  }

  getAllCourses() {
    const response = this.http.get('http://localhost:3010/api/getAllCourses');
    return response;
  }
}
