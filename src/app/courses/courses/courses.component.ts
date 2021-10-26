import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: Observable<Course[]>;
  public displayedColumns: string[] = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    // this.courses = [];
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
  }

}
