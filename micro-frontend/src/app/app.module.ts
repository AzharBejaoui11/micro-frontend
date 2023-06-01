import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import {AppRoutingModule} from "../app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AddSchoolComponent,
    SchoolListComponent,
    AddStudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
