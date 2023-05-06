import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../model/student';
import { delay } from 'rxjs';
import { Location } from '@angular/common';

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
  isUpdaingSuccess = false;
  isSendingPut = false;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService, private location : Location
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(Number(id)).subscribe((data) => {
      console.log(data);
      this.student = data;
    });
  }
  update() {
    this.isSendingPut = true;
    this.studentService
      .updateStudent(this.student)
      .pipe(delay(2000))
      .subscribe(() => {
        console.log('Student data updated!');
        this.isUpdaingSuccess = true;
        this.isSendingPut = false;
      });
  }
  cancel() {
    console.log('Cancel method invoked');
    this.location.back();
  }
}
