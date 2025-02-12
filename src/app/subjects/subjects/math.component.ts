import { Component } from '@angular/core';
import {SubjectComponent} from "../subject/subject.component";
import {GradeListService} from "../../grade-list.service";

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [
    SubjectComponent
  ],
  templateUrl: './generic.component.html'
})
export class MathComponent {
  subject = GradeListService.subjects.math;
  subjectNumber = 0;
}
