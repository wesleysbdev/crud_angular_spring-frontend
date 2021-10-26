import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: Course[] = [];
  public displayedColumns: string[] = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    // this.courses = [];
  }

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }

}
