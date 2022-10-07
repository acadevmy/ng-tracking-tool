import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ProjectComponent } from './project/project.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    SearchFilterPipe,
    ProjectFormComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
