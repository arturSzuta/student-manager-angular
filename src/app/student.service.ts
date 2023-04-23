import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './model/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsUrl = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<Student[]>(this.studentsUrl);
  }
  deleteStudent(student: Student) {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.delete<Student>(url);
  }
}
