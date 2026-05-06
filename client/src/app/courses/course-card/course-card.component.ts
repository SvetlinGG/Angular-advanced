import { Attribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {


  @Input()
  course!: Course;

  @Input()
  cardIndex!: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor(private coursesService: CoursesService, @Attribute('type') private type: string){}


  ngOnInit(): void {
    
  }

  onTitleChanged(newTitle: string){
    this.course.description = newTitle
  }

  onSaveClicked(description: string){
    this.courseEmitter.emit({...this.course, description})
  }

}
