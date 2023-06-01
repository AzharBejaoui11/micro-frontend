import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  baseUrl = 'http://localhost:8070/api/v1';
  Url = 'http://localhost:8090/api/v1';

  constructor(private http: HttpClient) {
  }

  addStudent(data: any) {
    return this.http.post(`${this.Url}/students`, data)
  }
  getStudent(){
    return this.http.get(`${this.Url}/students`);
  }

  addSchool(data: any) {
    return this.http.post(`${this.baseUrl}/schools`, data)
  }
  getSchool(){
    return this.http.get(`${this.baseUrl}/schools`);
  }

}
