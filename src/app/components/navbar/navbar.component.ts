import { Component, OnInit } from '@angular/core';

import { LoginService } from './../../services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title: string = 'hello world';
  miestado$: Observable<boolean> = this.authSvc.status$;

  constructor(private authSvc: LoginService) {}

  // doLogin() {
  //   this.authSvc.logging();
  // }

  doLogout() {
    this.authSvc.logout();
  }

  ngOnInit(): void {}
}
