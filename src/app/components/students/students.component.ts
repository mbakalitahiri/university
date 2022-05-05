import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { Istuden } from "./../../models/istuden";
import { StudentService } from "./../../services/student.service";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { NgModel } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
})
export class StudentsComponent implements OnInit {
  students!: Istuden[];
  termino: string = "";
  error$!: Observable<any>;
  modalRef!: BsModalRef;

  constructor(
    private studentSvc: StudentService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.studentSvc.getStudents().subscribe({
      next: (resp: any) => {
        this.students = resp;
      },
      error: (error: HttpErrorResponse) => {
        // simple logging, but you can do a lot more, see below
        console.error("An error occurred:", error.error);
      },
      complete: () => {},
    });
  }

  onRemoveBtn(id: number) {
    return new Promise((resolve, reject) => {
      let response = confirm("estas seguro de eliminar el alumno?");
      if (response) {
        resolve(this.studentSvc.removeStudent(id));
        this.router.navigate(["/"]);
      }
    });
  }

  openModal(template: TemplateRef<any>, student: Istuden) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.content = student;
  }
}
