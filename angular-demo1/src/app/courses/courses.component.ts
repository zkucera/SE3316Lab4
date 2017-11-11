import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CoursesService} from '../courses.service'
import {AutoGrowDirective} from '../auto-grow.directive'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  
  providers: [CoursesService],
  encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {
  title: string = "The title of the courses page";
  courses;
  constructor(courseService: CoursesService) {
    
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
  }

}
