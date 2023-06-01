import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  baseUrl = 'http://localhost:8080/api/v1';


  constructor(private http: HttpClient) {
  }

  getSchool(){
    return this.http.get(`${this.baseUrl}/schools`);
  }
  getStudents(id : any ){
    return this.http.get(`${this.baseUrl}/schools/with-students/${id}`);
  }

}
