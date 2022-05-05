import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AsignaturaService {
  constructor(private http: HttpClient) {}

  getAsignaturas(): Observable<any[]> {
    return this.http.get<any[]>("http://192.168.0.20:3000/api/v1/asignatura");
  }
}
