import { Action } from "@ngrx/store";
import { Student } from "../student.model";

export enum StudentActionTypes {
  LOAD_STUDENTS = "[Student] Load Students",
  LOAD_STUDENTS_SUCESS = "[Student] Load Students Sucess",
  LOAD_STUDENTS_FAIL = "[Student] Load Students Fail"
}

export class LoadStudents implements Action {
  readonly type = StudentActionTypes.LOAD_STUDENTS;
}

export class LoadStudentsSucess implements Action {
  readonly type = StudentActionTypes.LOAD_STUDENTS_SUCESS;

  constructor(public payload: { students: Student[] }) {}
}

export class LoadStudentsFail implements Action {
  readonly type = StudentActionTypes.LOAD_STUDENTS_FAIL;
  constructor(public payload: string) {}
}

export type Action = LoadStudents | LoadStudentsSucess | LoadStudentsSucess;
