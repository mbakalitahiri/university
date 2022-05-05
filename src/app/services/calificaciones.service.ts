import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CalificacionesService {
  constructor(private http: HttpClient) {}

  getNotas(): Observable<any[]> {
    return this.http.get<any[]>("http://192.168.0.20:3000/api/v1/notas", {
      headers: new HttpHeaders({ uno: "dos" }),
    });
  }
}
