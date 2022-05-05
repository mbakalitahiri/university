import { AuthInterceptorService } from "./interceptors/auth-interceptor.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StudentDetailsComponent } from "./components/students/student-details/student-details.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { GenderPipe } from "./pipes/gender.pipe";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from "./components/login/login.component";
import { LoginGuard } from "./services/guards/login.guard";
import { LoginService } from "./services/login.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StudendtAddReactiveComponent } from "../app/components/students/studendt-add-reactive/studendt-add-reactive.component";
import { StudentAddComponent } from "./components/students/student-add/student-add.component";
import { StudentService } from "./services/student.service";
import { StudentsCalificationsComponent } from "./components/students/students-califications/students-califications.component";
import { StudentsComponent } from "./components/students/students.component";
import { SubjectComponent } from "./components/subjects/subject/subject.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";
import { FilteringDataPipe } from "./pipes/filtering-data.pipe";
import { SingUpComponent } from "./components/singup/singup.component";
import { ModalModule, BsModalService } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    SubjectComponent,
    NavbarComponent,
    StudentAddComponent,
    GenderPipe,
    StudentDetailsComponent,
    LoginComponent,
    StudendtAddReactiveComponent,
    SubjectComponent,
    StudentsCalificationsComponent,
    FilteringDataPipe,
    SingUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  providers: [
    LoginGuard,
    LoginService,
    StudentService,
    BsModalService,
    GenderPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
