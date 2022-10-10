import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { SearchProject } from '../../models/search-project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit {
  selectedProject: Project | undefined;
  searchedProject!: SearchProject;
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getAll();
  }

  selectProject(project: Project): void {
    this.selectedProject = this.projectService.get(project.id);
  }

  addNewProject(project: Project): void {
    this.projects = this.projectService.add(project);
  }

  searchProject(searchedProject: SearchProject): void {
    this.searchedProject = searchedProject;
  }
}
