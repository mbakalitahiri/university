import { Istuden } from '../../../models/istuden';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student!:Istuden

  constructor(private studentSvc: StudentService, private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.active.params.subscribe((params:Params) => {
      let routerParam = params['id'];
      this.studentSvc.getStudentById(routerParam).subscribe((resp:any) => { 
        this.student = resp[0];

       });
     });
  }

}
