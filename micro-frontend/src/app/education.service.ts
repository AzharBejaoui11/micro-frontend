import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  baseUrl = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) {
  }


  addStudent(data: any) {
    return this.http.post(`${this.baseUrl}/students`, data)
  }

  addSchool(data: any) {
    return this.http.post(`${this.baseUrl}/schools`, data)
  }

}
