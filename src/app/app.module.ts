import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule } from '@angular/forms';
import { RemoveHonorificPipe } from './remove-honorific.pipe';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { DetailStudentHeaderComponent } from './detail-student-header/detail-student-header.component';
import { DetailStudentContentComponent } from './detail-student-content/detail-student-content.component';
import { DetailStudentButtonsComponent } from './detail-student-buttons/detail-student-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    CreateStudentComponent,
    EditStudentComponent,
    RemoveHonorificPipe,
    NavigationComponent,
    FooterComponent,
    DetailStudentComponent,
    DetailStudentHeaderComponent,
    DetailStudentContentComponent,
    DetailStudentButtonsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
