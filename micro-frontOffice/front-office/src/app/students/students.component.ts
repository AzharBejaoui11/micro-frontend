import {Component, OnInit} from '@angular/core';
import {EducationService} from "../education.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  data: any;
  schoolId : any;

  constructor(private educationService: EducationService, private route: ActivatedRoute) {
  }

  getStudents() {
    this.educationService.getStudents(this.schoolId).subscribe((response: any) => {
      this.data = response
      console.log(response)
    })
  }

  ngOnInit(): void {
    this.schoolId = this.route.snapshot.paramMap.get('id');
    this.getStudents()
  }
}
