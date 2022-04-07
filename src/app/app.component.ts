import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { LoginService } from './services/login.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'routes';
  @ViewChild(NavbarComponent) navbar!: NavbarComponent;
  ngOnInit() {}
  ngAfterViewInit(): void {}

  constructor(private authSvc: LoginService) {}

  // miestado$: Observable<boolean> = this.authSvc.status$;

  doLogin() {
    // this.authSvc.logging();
  }

  doLogout() {
    // this.authSvc.logout();
  }
}
