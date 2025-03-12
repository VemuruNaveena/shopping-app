import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UdemyService {
  http = inject(HttpClient);
  createCourseApi(course: any) {
    const response = this.http.post(
      'http://localhost:3010/api/createCourse',
      course
    );
    return response;
  }
}
