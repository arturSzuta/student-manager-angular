import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../model/student';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css'],
})
export class DetailStudentComponent implements OnInit {
  student!: Student;
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('Selected id ' + id);
    this.studentService.getStudent(Number(id)).subscribe((data) => {
      this.student = data;
      console.log(this.student);
    });
  }
  getBack(){
    console.log("getBack method used")
    this.location.back();
  }
}
