import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EducationService} from "../education.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  data: any
  studentForm!: FormGroup;

  constructor(private educationService: EducationService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      schoolId: [''],
    })


  }


  save() {
    this.data = this.studentForm.value
    this.addNewStudent();
  }

  addNewStudent() {
    this.educationService.addStudent(this.data).subscribe((response: any) => {
      console.log(response);
    })
  }
}
