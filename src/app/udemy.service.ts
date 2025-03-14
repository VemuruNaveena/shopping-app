import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UdemyService {
  http = inject(HttpClient);

  //
  createCourseApi(course: any) {
    // logic to add custom token.
    const headers = new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2NhNGNjNzE1NDAxYzJiMThiMzljMjkiLCJpYXQiOjE3NDE5MTM3OTR9.garlF-MVF80oTngqbsXLUuEM5FLRIUuPvQrGf5ScMOE`,
    });
    const response = this.http.post(
      'http://localhost:3010/api/createCourse',
      course,
      { headers: headers }
    );
    return response;
  }

  getAllCourses() {
    // add custom header
    //
  }

  getEnrolledCourses() {
    // add custom header
    // http call
  }
}
