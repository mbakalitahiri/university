import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Istuden } from './../../../models/istuden';
import { StudentService } from './../../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studendSelected!: Istuden[];

  constructor(
    private activated: ActivatedRoute,
    private studentsSvc: StudentService
  ) {}

  ngOnInit(): void {
    this.activated.params.subscribe((resp: Params) => {
      //this.studendSelected = this.studentsSvc.getStudentById(resp['id']);
    });
  }
}
