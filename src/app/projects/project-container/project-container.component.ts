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

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
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
