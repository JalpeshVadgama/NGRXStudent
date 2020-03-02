import { StudentsModule } from "./students/students.module";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "students",
    loadChildren: "../app/students/students.module#StudentsModule"
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
