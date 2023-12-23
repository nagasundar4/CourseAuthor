import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  // template: '<h2>{{"Title: " + title}}</h2>',
  // template: '<h2>{{ getTitle() }}</h2>',
  template: `
    {{ text | summary }}
    <!-- {{ course.title | uppercase | lowercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number : '1.2-2' }} <br />
    {{ course.price | currency : 'AUD' : true : '3.2-2' }} <br />
    {{ course.releaseDate | date : 'shortDate' }} <br /> -->

    <!-- <h2>{{ title }}</h2> -->
    <!-- <img src="{{ imageUrl }}" alt="" /> -->
    <!-- <img [src]="imageUrl" alt="" />
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul> -->
    <!-- <button class="btn btn-primary" [class.active]="isActive">Save</button> -->
    <!-- <div (click)="onDivClicked()">
      <button
        (click)="onSave($event)"
        class="btn btn-primary"
        [style.backgroundColor]="isActive ? 'blue' : 'white'"
      >
        Save
      </button>
    </div> -->
    <!-- <input #email (keyup.enter)="onKeyUp(email.value)" /> -->
    <!-- <input [value]="email" (keyup.enter)="email=$event.target.value onKeyUp()" /> -->
    <!-- <input [(ngModel)]="email" (keyUp.enter)="onKeyUp()" /> -->
  `,
})
export class CoursesComponent {
  text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  `;
  // course = {
  //   title: 'The Complete Angular Course',
  //   rating: 4.9745,
  //   students: 30123,
  //   price: 190.95,
  //   releaseDate: new Date(2016, 3, 1),
  // };
  // isActive: boolean = false;
  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  //   this.isActive = true;
  // }
  // title!: 'List of courses';
  // courses;
  // imageUrl: 'https://motigo.com/wp-content/uploads/2023/11/Rolling-wave-planning.jpg' =
  //   'https://motigo.com/wp-content/uploads/2023/11/Rolling-wave-planning.jpg';
  // onSave($event: any) {
  //   $event.stopPropagation();
  //   console.log('button was clicked', $event);
  // }
  // email: any = 'me@example.com';
  // // onKeyUp(email: any /* $event: any */) {
  // //   /* if ($event.keyCode === 13) console.log('ENTER was pressed');*/
  // //   console.log(email /* $event.target.value */);
  // // }
  // onKeyUp() {
  //   console.log(this.email);
  // }
  // onDivClicked() {
  //   console.log('Div was clicked');
  // }
  // getTitle() {
  //   return this.title;
  // }
}
