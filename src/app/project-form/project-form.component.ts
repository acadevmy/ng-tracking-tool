import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Input() nextId!: number;
  @Output() submitted = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  submitProjectForm(form: NgForm): void {
    this.submitted.emit({
      id: this.nextId,
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: [],
      ...form.value
    });
  }
}
