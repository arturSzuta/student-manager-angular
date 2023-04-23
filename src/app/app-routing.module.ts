import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  {path:"students", component:StudentsListComponent},
  {path:"add-student", component:CreateStudentComponent},
  {path:"edit-student/:id", component:EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
