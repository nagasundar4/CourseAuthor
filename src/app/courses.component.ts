import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  // template: '<h2>{{"Title: " + title}}</h2>',
  // template: '<h2>{{ getTitle() }}</h2>',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
})
export class CoursesComponent {
  // constructor(title: string) {}
  title: 'List of courses' = 'List of courses';
  courses = ['course1', 'course2', 'course3'];

  getTitle() {
    return this.title;
  }
}
