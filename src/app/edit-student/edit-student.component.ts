import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  // TODO!
  // User notification
  // Cancel button implementation
  student!: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(Number(id)).subscribe((data) => {
      console.log(data);
      this.student = data;
    });
  }
  update() {
    this.studentService.updateStudent(this.student).subscribe(() => {
      console.log('Student data updated!');
    });
  }
}
