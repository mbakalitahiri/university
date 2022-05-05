import { Istuden } from "./../models/istuden";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  studends: Istuden[] = [];

  constructor(private http: HttpClient) {
    this.getStudents();
  }

  getStudents(): Observable<Istuden[]> {
    return this.http.get<Istuden[]>("http://192.168.0.20:3000/api/v1/alumno");
  }

  getStudentById(id: number) {
    return this.http.get(`http://192.168.0.20:3000/api/v1/alumno/${id}`);
  }

  addStudent(student: Istuden) {
    this.http
      .post<Istuden>("http://192.168.0.20:3000/api/v1/alumno", student)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
  removeStudent(studendtId: number) {
    this.http
      .delete<any>(`http://192.168.0.20:3000/api/v1/alumno/${studendtId}`)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
