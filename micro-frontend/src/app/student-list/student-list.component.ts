import { Component } from '@angular/core';
import {EducationService} from "../education.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  data: any;
  constructor (private educationService : EducationService ){}

  getStudents(){
    this.educationService.getStudent().subscribe((response:any) => {
      this.data = response
      console.log(response)
    })
  }

  ngOnInit(): void {
    this.getStudents()
  }
}
