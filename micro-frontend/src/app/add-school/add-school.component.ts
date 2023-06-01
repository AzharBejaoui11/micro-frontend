import {Component, OnInit} from '@angular/core';
import {EducationService} from "../education.service";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {School} from "../../school";

@Component({
  selector: 'app-add-school.ts',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit{

  data:any
  schoolForm! :FormGroup;
  constructor (private educationService : EducationService ,private fb : FormBuilder ){}

  ngOnInit(): void {
    this.schoolForm = this.fb.group({
      name: [''],
      email: [''],
    })
    console.log(this.schoolForm)

  }


  save(){
    this.data = this.schoolForm.value
  this.addNewSchool();
  }

  addNewSchool(){
    this.educationService.addSchool(this.data).subscribe((response: any )=> {
      console.log(response);
    })
  }

}
