import { Component, OnInit } from '@angular/core';

import { AsignaturaService } from './../../services/asignatura.service';
import { Icurso } from './../../models/Icurso';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  asignaturas: Icurso [] = []

  constructor(private subject: AsignaturaService) { }

  ngOnInit(): void {
    this.subject.getAsignaturas().subscribe((resp:any)=>{
this.asignaturas = resp    })
  }

  onRemoveBtn(id:number){

  }

}
