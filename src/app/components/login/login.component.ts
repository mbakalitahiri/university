import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";

import { LoginService } from "./../../services/login.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
   miestado$: Observable<boolean> = this.authSvc.status$;
  studendForm!: FormGroup;

  constructor(private authSvc: LoginService, private frmBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.studendForm = this.frmBuilder.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  doLogin() {
    //this.authSvc.logging();
  }

  procesar() {
   this.authSvc.loguearse(this.studendForm.value.email, this.studendForm.value.password)
  }
}
