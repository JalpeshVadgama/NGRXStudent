import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  students: any;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch({ type: "LOAD_STUDENTS" });
    this.store.subscribe(state => {
      this.students = state.students.students;
    });
  }
}
