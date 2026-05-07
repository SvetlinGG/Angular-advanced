import { Component, Inject, Injector, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
//import { CourseImageComponent } from './courses/course-image/course-image.component';
import { Course } from './model/course';
import { COURSES } from '../db-data';
import { CoursesService } from './courses/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseCardComponent, CourseImageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;

  coursesTotal = this.courses.length

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private injector: Injector ){}

  ngOnInit(): void {
    
  }

  onEditCourse(){
    this.courses[1].category = 'ADVANCED';
  }

  save(course: Course){
    this.coursesService.saveCourse(course)
        .subscribe(() => console.log('Course Saved'))
  }
}
