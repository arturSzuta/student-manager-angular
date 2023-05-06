import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-create-student-reactive',
  templateUrl: './create-student-reactive.component.html',
  styleUrls: ['./create-student-reactive.component.css']
})
export class CreateStudentReactiveComponent {
  isSavingSuccess = false;
  addStudentForm = this.formBuilder.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]]
  })

  constructor(private formBuilder : FormBuilder, private studentService : StudentService) {
  }

  get f(){
    return this.addStudentForm.controls;
  }

  saveStudent(){
    console.log("saveStudent invoked")
    if (this.addStudentForm.invalid){
      return;
    }
    this.studentService.addStudent({name:this.f.name.value, email:this.f.email.value} as Student)
    .subscribe
    console.log("Student added");
     this.isSavingSuccess = true;
  }
}
