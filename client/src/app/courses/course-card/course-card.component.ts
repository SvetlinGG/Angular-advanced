import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {


  @Input()
  course: Course;

  @Input()
  cardIndex: number;



  ngOnInit(): void {
    
  }

}
