import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-detail-student-buttons',
  templateUrl: './detail-student-buttons.component.html',
  styleUrls: ['./detail-student-buttons.component.css']
})
export class DetailStudentButtonsComponent {
  @Output() onCancelClicked = new EventEmitter();


  cancelClick(){
    this.onCancelClicked.emit();
  }

  
}
