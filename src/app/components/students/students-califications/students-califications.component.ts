import { Component, OnInit } from '@angular/core';

import { CalificacionesService } from './../../../services/calificaciones.service';

@Component({
  selector: 'app-students-califications',
  templateUrl: './students-califications.component.html',
  styleUrls: ['./students-califications.component.css']
})
export class StudentsCalificationsComponent implements OnInit {

  calificaciones:any [] = []

  constructor(private calificacionesSvc: CalificacionesService) { }

  ngOnInit(): void {
    this.calificacionesSvc.getNotas().subscribe((resp:any)=>{
this.calificaciones = resp    })
  }

}
