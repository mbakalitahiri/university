import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  isLogged: boolean = false;

  private status = new BehaviorSubject<boolean>(this.isLogged);
  status$ = this.status.asObservable();

  logging() {
    if (!this.isLogged) {
      this.isLogged = true;
      this.status.next(true);
    }
  }

  logout() {
    localStorage.clear();
    this.isLogged = false;
    this.status.next(false);
  }

  isAuthenticated(): boolean {
    return this.isLogged;
  }

  registrarse(email: string, password: string) {
    return this.http
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFjHUY8tn0ReSASChzUbUL8bTHuK_5ajI",
        { email, password, returnSecureToken: true }
      )
      .subscribe(
        (resp: any) => {
          this.logging();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  loguearse(email: string, password: string) {
    return this.http
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFjHUY8tn0ReSASChzUbUL8bTHuK_5ajI",
        { email, password, returnSecureToken: true }
      )
      .subscribe(
        (resp: any) => {
          localStorage.setItem("token", resp.idToken);
          this.logging();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  constructor(private http: HttpClient) {}
}
