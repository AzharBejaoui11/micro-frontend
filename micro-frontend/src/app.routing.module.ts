import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddSchoolComponent} from "./app/add-school/add-school.component";
import {AddStudentComponent} from "./app/add-student/add-student.component";
import {SchoolListComponent} from "./app/school-list/school-list.component";
import {StudentListComponent} from "./app/student-list/student-list.component";
const routes: Routes = [
  { path: '', component: AddSchoolComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'school-list', component: SchoolListComponent },
  { path: 'students', component: StudentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
