import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';



@NgModule({
  declarations: [StudentComponent, StudentAddComponent, StudentEditComponent, StudentListComponent],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
