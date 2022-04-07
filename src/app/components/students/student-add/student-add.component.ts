import { Istuden } from './../../../models/istuden';
import { StudentService } from "./../../../services/student.service";
import { LoginService } from "./../../../services/login.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: "app-student-add",
  templateUrl: "./student-add.component.html",
  styleUrls: ["./student-add.component.css"],
})
export class StudentAddComponent implements OnInit {
  @ViewChild("myForm") myForm!: NgForm;
  // myForm!: NgForm;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}

  procesar() {
    let valor = this.myForm.value
    this.studentService.addStudent(valor);
  }
}
