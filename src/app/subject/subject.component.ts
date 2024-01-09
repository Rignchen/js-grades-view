import {Component} from '@angular/core';
import {GradeComponent} from "../grade/grade.component";
import {NgForOf, NgIf} from "@angular/common";
import {SemesterComponent} from "../semester/semester.component";
import {getSubject, round} from "../../lib";
import {allSubjectsName} from "../../const";

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [
    GradeComponent,
    NgForOf,
    NgIf,
    SemesterComponent
  ],
  templateUrl: './subject.component.html'
})
export class SubjectComponent {
  semesters: number[][] = [[]];
  sum = 0;
  average = 0;
  upgrade = 0;
  subjectNumber = 0;

  init() {
    // get the parameter from the url
    this.subjectNumber = getSubject();
    // return an empty string so it won't display anything
    return ""
  }

  updateAverage($event: number[]) {
    this.sum -= $event[0];
    this.sum += $event[1];
    const old_average = this.average;
    this.average = round(this.sum / this.semesters.filter(a => a.length > 0).length, 0.5)
    this.upgrade = round((this.average - old_average)*100);
  }

  subjectName() {
    return allSubjectsName[this.subjectNumber];
  }
}
