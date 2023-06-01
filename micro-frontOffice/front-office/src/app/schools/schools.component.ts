import { Component } from '@angular/core';
import {EducationService} from "../education.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent {

  data: any;
  constructor (private educationService : EducationService , private router:Router){}

  getSchools(){
    this.educationService.getSchool().subscribe((response:any) => {
      this.data = response
      console.log(response)
    })
  }

  ngOnInit(): void {
    this.getSchools()
  }

  viewStudents(schoolId: any) {
    this.router.navigate(['/add-student', { id: schoolId }]);
  }

  }
