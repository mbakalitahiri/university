import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StudentDetailsComponent } from "./components/students/student-details/student-details.component";
import { LoginComponent } from "./components/login/login.component";
import { LoginGuard } from "./services/guards/login.guard";
import { StudendtAddReactiveComponent } from "./components/students/studendt-add-reactive/studendt-add-reactive.component";
import { StudentAddComponent } from "./components/students/student-add/student-add.component";
import { StudentsCalificationsComponent } from "./components/students/students-califications/students-califications.component";
import { StudentsComponent } from "./components/students/students.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";
import { SingUpComponent } from "./components/singup/singup.component";

const routes: Routes = [
  {
    path: "students",
    component: StudentsComponent,
    children: [{ path: ":id", component: StudentsComponent }],
    canActivate: [LoginGuard],
  },
  { path: "subjects", component: SubjectsComponent, canActivate: [LoginGuard] },
  {
    path: "new-student",
    component: StudentAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "student-calificaciones",
    component: StudentsCalificationsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "new-student-reactive",
    component: StudendtAddReactiveComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "signup",
    component: SingUpComponent,
  },
  {
    path: "student-detail/:id",
    component: StudentDetailsComponent,
    canActivate: [LoginGuard],
  },
  { path: "login", component: LoginComponent },
  { path: "", pathMatch: "full", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
