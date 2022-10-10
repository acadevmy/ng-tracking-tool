import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../../models/project';
import { SearchProject } from '../../models/search-project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit, OnDestroy {
  projectsSub!: Subscription;
  selectedProject: Project | undefined;
  searchedProject!: SearchProject;
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectsSub = this.projectService.getAll().subscribe(data => this.projects = data);
  }

  ngOnDestroy(): void {
    this.projectsSub.unsubscribe();
  }

  selectProject(project: Project): void {
    this.selectedProject = this.projectService.get(project.id);
  }

  addNewProject(project: Project): void {
    this.projectService.add(project);
  }

  searchProject(searchedProject: SearchProject): void {
    this.searchedProject = searchedProject;
  }
}
