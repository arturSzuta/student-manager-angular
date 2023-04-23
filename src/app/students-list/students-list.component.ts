import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../model/student';
import { delay } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  // Send whole object to
  // After succesfull DELETE request show confirmation message

  students: Student[] = [];
  isDataReady = false;
  isStudentRemoved = false;
  removedStudentName = "";

  constructor(private studentService: StudentService) {}
  ngOnInit(): void {
    this.studentService
      .getStudents()
      .pipe(delay(2000))
      .subscribe((data) => {
        this.students = data;
        console.log(this.students);
        this.isDataReady = true;
      });
  }
  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student).subscribe(() => {
      this.students = this.students.filter((s) => s !== student);
      console.log('Student deleted id: ' + student.id);
      this.isStudentRemoved = true;
      this.removedStudentName = student.name;
    });
  }
}
