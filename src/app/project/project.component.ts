import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { SearchProject } from '../models/search-project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  selectedProject: Project | undefined;
  searchedProject!: SearchProject;

  projects: Project[] = [
    {
      id: 1,
      code: 'NHusYJl',
      name: 'Progetto Alpha',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 1, 30),
      end: new Date(2019, 3, 15),
      priority: 'medium',
      done: true,
      tasks: []
    },
    {
      id: 2,
      code: 'SJieYKl',
      name: 'Progetto Beta',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 3, 30),
      end: new Date(2019, 6, 15),
      priority: 'low',
      done: true,
      tasks: []
    },
    {
      id: 3,
      code: 'POjeGBs',
      name: 'Progetto Gamma',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 8, 15),
      priority: 'low',
      done: false,
      tasks: []
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
  }

  addNewProject(project: Project): void {
    this.projects = [project, ...this.projects];
  }

  searchProject(searchedProject: SearchProject): void {
    this.searchedProject = searchedProject;
  }
}
