import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent {

  students: Student[] | undefined;
  constructor(private studentService: StudentService) {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
      console.log(this.students);
    });
  }
  deleteStudent(id : number) {
    console.log("Delete student " + id);
    alert("Delete student with ID: " + id)
    }
}
