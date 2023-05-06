import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { CreateStudentReactiveComponent } from './create-student-reactive/create-student-reactive.component';

const routes: Routes = [
  {path:"students", component:StudentsListComponent},
  {path:"add-student", component:CreateStudentReactiveComponent},
  {path:"edit-student/:id", component:EditStudentComponent},
  {path:"detail-student/:id", component:DetailStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
