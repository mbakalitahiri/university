import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';

import { StudentService } from './../../../services/student.service';

@Component({
  selector: 'app-studendt-add-reactive',
  templateUrl: './studendt-add-reactive.component.html',
  styleUrls: ['./studendt-add-reactive.component.css']
})
export class StudendtAddReactiveComponent implements OnInit {


  studendForm!:FormGroup



  ngOnInit(): void {
    this.studendForm = new FormGroup({
      'nombre': new FormControl(null),
      'apellidos': new FormControl(null),
      'fecha_nacimiento': new FormControl(null),
      'sexo': new FormControl(null),
      'direccion': new FormControl(null),
      'telefono': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
      'personal_web': new FormControl(null),
      'personal_github': new FormControl(null),
      'personal_twitter': new FormControl(null),
      'personal_instagram': new FormControl(null),
      'personal_facebook': new FormControl(null)

    })
  }

  constructor(private studentService: StudentService) {}


  procesar() {
     this.studentService.addStudent(this.studendForm.value);
  }
}
