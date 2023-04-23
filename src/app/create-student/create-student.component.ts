import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent {
  isRequiredValidadionFailed = false;
  isSavingSuccess = false;
  successMessage = '';
  isSendingPost = false;

  constructor(private studentService: StudentService) {}

  saveStudent(name: string, email: string) {
    this.isRequiredValidadionFailed = false;
    if (!name || !email) {
      this.isRequiredValidadionFailed = true;
      return;
    }
    this.isSendingPost = true;
    this.studentService
      .addStudent({ name, email } as Student)
      .subscribe((data) => {
        console.log(data);
        this.isSavingSuccess = true;
        this.successMessage = 'New student with id: ' + data.id + ' created';
        this.isSendingPost = false;
      });
  }
}
