import {Component, OnInit} from '@angular/core';
import {EducationService} from "../education.service";


@Component({
  selector: 'app-school.ts-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit{
  data: any;
  constructor (private educationService : EducationService ){}

  getSchools(){
    this.educationService.getSchool().subscribe((response:any) => {
      this.data = response
      console.log(response)
    })
  }

  ngOnInit(): void {
    this.getSchools()
  }
}
