import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SchoolsComponent} from "./schools/schools.component";
import {StudentsComponent} from "./students/students.component";

const routes: Routes = [
  { path: '', component: SchoolsComponent },
  { path: 'add-student', component: StudentsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
