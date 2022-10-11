import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
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

  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);
  projects$ = this.projectsSubject.asObservable();

  constructor() { }

  getAll(): Observable<Project[]> {
    return this.projects$;
  }

  get(id: number): Observable<Project | undefined> {
    return this.projects$.pipe(
      map((projects) => projects.find(project => project.id === id))
    );
  }

  add(project: Project): void {
    this.projects = [{ ...project, id: this.projects.length + 1 }, ...this.projects];
    this.projectsSubject.next(this.projects);
  }

  update(project: Project): void {
    this.projects = this.projects.map(item => item.id === project.id ? { ...item, ...project } : item);
    this.projectsSubject.next([ ...this.projects ]);
  }
}
