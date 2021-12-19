import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  public list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        take(1),
        delay(2000),
        tap(courses => console.log(courses))
    );
  }
}
