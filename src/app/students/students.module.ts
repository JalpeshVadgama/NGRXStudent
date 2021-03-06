import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { StudentComponent } from "./student/student.component";
import { StudentAddComponent } from "./student-add/student-add.component";
import { StudentEditComponent } from "./student-edit/student-edit.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { RouterModule, Routes } from "@angular/router";
import { studentReducer } from "./state/student.reducer";
const studentRoutes: Routes = [{ path: "", component: StudentComponent }];
@NgModule({
  declarations: [
    StudentComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(studentRoutes),
    StoreModule.forFeature("students", studentReducer)
  ]
})
export class StudentsModule {}
