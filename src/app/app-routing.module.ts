import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectContainerComponent } from "./projects/project-container/project-container.component";
import { ProjectDetailComponent } from "./projects/project-detail/project-detail.component";

const routes: Routes = [
  { path: 'projects/detail', component: ProjectDetailComponent },
  { path: 'projects', component: ProjectContainerComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }